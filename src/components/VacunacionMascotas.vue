<template>

<q-page>
    <q-form 
      @submit="formVacunasMascotasSubmit"
      class="row "
      id="FormularioDatosMascotas"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })">
      <div class="col-6  q-mx-auto">
        <div class="text-weight-bolder text-h5">Datos de la vacunacion de las Mascotas</div>
        <q-select
    v-model="vacuncionMascotaStore.vacunacion"
    :options="optionsvacunacion"
    label="Cuantas vacunas tienen"
    emit-value
    map-options
    class="col-12"
  /> <q-input
    v-if="vacuncionMascotaStore.vacunacion === 'Otros'"
    v-model="vacuncionMascotaStore.vacunas"
    label="Otras Vacunas"
    class="col-12"
  />
  <p v-if="datosMascotasStore.obtencion !== ''">*PVC: Se refiere a la vacuna contra el "Parvovirus Canino".</p>
  <q-input 
  type="text"
   v-model="vacuncionMascotaStore.observacion"
    placeholder="Observaciones"/>
    <tr></tr>
       
    <q-btn type="submit" label="Continuar" color="primary" class="col-12" />

        
</div>
    </q-form>
</q-page>


</template>
<script setup lang="ts" >
import { useVacunacionMascota } from 'src/stores/vacunacion-mascota';
import { useFormulariosControl } from 'src/stores/formularios-control';
import { useDatosMascotas } from 'src/stores/datos-mascotas';
import { useQuasar } from 'quasar';
import { computed } from 'vue';
const emit = defineEmits(['submit']);
const formulariosControl = useFormulariosControl();
const datosMascotasStore = useDatosMascotas();
const $q = useQuasar();
const vacuncionMascotaStore = useVacunacionMascota();


const optionsvacunacion = computed(() => {
      if (datosMascotasStore.especie === 'perro') {
        return [
          { label: 'No tiene', value: 'no-tiene' },
          { label: 'Rabia', value: 'ravia' },
          { label: 'Tripe', value: 'tripe' },
          { label: 'Pvc', value: 'pvc' },
          { label: 'Otros', value: 'Otros' },
        ]
      } else if (datosMascotasStore.especie === 'gato') {
        return [
          { label: 'No tiene', value: 'no-tiene' },
          { label: 'Rabia', value: 'ravia' },
          { label: 'Tripe', value: 'tripe' },
          { label: 'Otros', value: 'Otros' }
        ]
      } else {
        return []
      }
    });
function formVacunasMascotasSubmit() {
  if (vacuncionMascotaStore.vacunacion.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar un nombre',
    });
    return;
  }
  if (vacuncionMascotaStore.observacion.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar la especie',
    });
    return;
  }

  formulariosControl.setVacunacionMascota(vacuncionMascotaStore.$state);

  formulariosControl.guardarInformacionEnLocalStorage();
  emit('submit', true);
 
}

</script>