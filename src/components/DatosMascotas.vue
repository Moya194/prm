<template>
<q-page>
    <q-form 
      @submit="formDatosMascotasSubmit"
      class="row "
      id="FormularioDatosMascotas"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })">
<div class="col-6  q-mx-auto">
    <div class="text-weight-bolder text-h5">Datos Generales de la Mascota</div>
    <q-input
    type="text"
    v-model="datosMascotasStore.nombre"
    label="Nombre de la mascota"
    lazy-rules
    :rules="[
      (val) => (val !== null && val !== '') || 'Coloque el nombre de la mascota',
      (val) => /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) || 'Caracteres incorrectos (números o signos)',
    ]"
    class="col-12"
  />
  <q-input
    type="text"
    v-model="datosMascotasStore.color"
    label="Color de la mascota"
    class="col-12"
  />

  <q-select
    v-model="datosMascotasStore.especie"
    :options="optionsEspecie"
    label="Tipo de mascota"
    emit-value
    map-options
    class="col-12"
  />
  <q-input
  type="date"
  v-model="datosMascotasStore.fechaNacimiento"
  label="Fecha de nacimiento"
  lazy-rules
  :rules="[
    (val) => (val !== null && val !== '') || 'Coloque la fecha de nacimiento',
  ]"
  class="col-12 fecha-input"
/>
<q-select
  v-model="datosMascotasStore.sexo"
  :options="optionsSexo"
  label="Sexo de la mascota"
  emit-value
  map-options
  class="col-12"
/>
<q-input
  v-model="datosMascotasStore.edad"
  type="number"
  label="Edad de la mascota"
  class="col-12"
/>
<q-input
  v-model="datosMascotasStore.descripcion"
  type="text"
  label="Descripción de la mascota"
  class="col-12"
/>
<q-select
      v-model="datosMascotasStore.raza"
      :options="optionsRaza"
      label="Raza de la mascota"
      emit-value
      map-options
      class="col-12"
    />
    <q-select
    v-model="datosMascotasStore.habitat"
    :options="optionsHabitat"
    label="Habitat de la mascota"
    emit-value
    map-options
    class="col-12"
  />
  <q-select
    v-model="datosMascotasStore.alimento"
    :options="optionsAlimento"
    label="Alimento de la mascota"
    emit-value
    map-options
    class="col-12"
  />
  <q-input
    v-if="datosMascotasStore.alimento === 'Otros'"
    v-model="datosMascotasStore.otroAlimento"
    label="Otros Alimentos"
    class="col-12"
  />
  <q-select
    v-model="datosMascotasStore.obtencion"
    :options="optionsObtencion"
    label="Modo de obtención de mascota"
    emit-value
    map-options
    class="col-12"
  />
  <p v-if="datosMascotasStore.obtencion !== ''">Seleccione "recogido" o "reubicado", si su mascota fue adoptada.</p>
  <q-select
    v-model="datosMascotasStore.tenencia"
    :options="optionsTenencia"
    label="Razón de Tenencia"
    emit-value
    map-options
    class="col-12"
  /> 
  <q-select
    v-model="datosMascotasStore.reproductivo"
    :options="optionsReproductivo"
    label="Estado Reproductivo"
    emit-value
    map-options
    class="col-12"
  />
  <p v-if="datosMascotasStore.obtencion !== ''">Entero: se refiere a que la mascota no ha sido esterilizada y puede reproducirse.</p>
<q-select
v-model="datosMascotasStore.defuncion"
:options="optionsdefuncion"
label="Tiene motivo de defuncion"
emit-value
map-options
class="col-12" 
/>

<div v-if="datosMascotasStore.defuncion === 'Si'">
      <q-input
        v-model="datosMascotasStore.fechaDefuncion"
        type="date"
        label="Fecha de defunción"
        class="col-12"
      />

      <q-input
        v-model="datosMascotasStore.motivoDefuncion"
        type="text"
        label="Motivo de defunción"
        class="col-12"
      />
      </div>
<td></td>

      <q-btn type="submit" label="Continuar" color="primary" class="col-1 botton" />

    

  
</div>
</q-form>

</q-page>


</template>
<script setup lang="ts">
import { useDatosMascotas } from 'src/stores/datos-mascotas';
import { useFormulariosControl } from 'src/stores/formularios-control'; 
import { useQuasar } from 'quasar';
import { ref, computed  } from 'vue';

const datosMascotasStore = useDatosMascotas(); 
const emit = defineEmits(['submit']);
const formulariosControl = useFormulariosControl();
const $q = useQuasar();
const optionsEspecie = ref([
      { label: 'Gato', value: 'gato' },
      { label: 'Perro', value: 'perro' }
    ])
const optionsSexo = [
    'Macho',
    'Hembra',
];
const optionsRaza = computed(() => {
      if (datosMascotasStore.especie === 'gato') {
        return [
          { label: 'Siamés', value: 'siames' },
          { label: 'Persa', value: 'persa' },
          { label: 'Maine Coon', value: 'Maine-Coon' },
          { label: 'Bengalí', value: 'bengalí' },
          { label: 'Sphynx', value: 'Sphynx' },
          { label: 'Ragdoll', value: 'Ragdoll' },
          { label: 'British Shorthair', value: 'British-Shorthair' },
          { label: 'Scottish Fold', value: 'Scottish-Fold' },
          { label: 'Sphinx', value: 'Sphinx' },
          { label: 'Angora Turco', value: 'Angora-Turco' },
          { label: 'Azul Ruso', value: 'Azul-Ruso' },
          { label: 'Somali', value: 'Somali' },
          { label: 'Manx', value: 'Manx' },
          { label: 'American Curl', value: 'American-Curl' },
          { label: 'Munchkin', value: 'Munchkin' },
          { label: 'Oriental', value: 'Oriental' },
          { label: 'Bombay', value: 'Bombay' },
          { label: 'Burmés', value: 'Burmes' },
          { label: 'Siamés Oriental', value: 'Siames-Oriental' },
          { label: 'Savannah', value: 'Savannah' },
        ]
      } else if (datosMascotasStore.especie === 'perro') {
        return [
          { label: 'Labrador Retriever', value: 'Labrador-Retriever' },
          { label: 'Pastor Alemán', value: 'pastor-aleman' },
          { label: 'Bulldog Francés', value: 'Bulldog-Francés' } ,
           { label: 'Caniche (Poodle)', value: 'Caniche-(Poodle)' },
          { label: ' Beagle', value: ' Beagle' },
          { label: 'Golden Retriever', value: 'golden-retriever' },
          { label: 'Rottweiler', value: 'Rottweiler' },
          { label: 'Boxer', value: 'Boxer' },
          { label: 'Yorkshire Terrier', value: 'Yorkshire-Terrier' } ,
           { label: 'Dálmata', value: 'Dálmata' },
          { label: 'Husky Siberiano', value: 'Husky-Siberiano' },
          { label: 'Pomerania', value: 'Pomerania' },
          { label: 'Border Collie', value: 'Border-Collie' },
          { label: 'Chihuahua', value: 'Chihuahua' },
          { label: 'Dachshund (Teckel)', value: 'Dachshund-(Teckel)' } ,
           { label: 'Bulldog Inglés', value: 'Bulldog-Inglés' },
          { label: 'Dóberman', value: 'Dóberman' },
          { label: 'Shih Tzu', value: 'Shih-Tzu' },
           { label: 'Australian Shepherd', value: 'Australian-Shepherd' },
          { label: 'Bichón Frisé', value: 'Bichón-Frisé' },
          { label: 'Mestizo', value: 'Mestizo' },
        ]
      } else {
        return []
      }
    });
    const optionsAlimento = [
      { label: 'Balanceado', value: 'balanceado' },
      { label: 'Mixta', value: 'mixta' },
      { label: 'Comida casera', value: 'comidacasera' },
      { label: 'Otros', value: 'Otros' }
    ]
    const optionsHabitat = [
    'Casa',
    'Finca',
    'Lote',
    'Taller',
];
const optionsObtencion = [
    'Recoguido',
    'Regalado',
    'Coprado',
    'Reubicado',
    'Nacido en casa',
];
const optionsTenencia = [
    'Asistencia',
    'Compañia',
    'Reproduccion',
    'Terapia',
    'Seguridad',
];
const optionsReproductivo = [
    'Esterilizado',
    'En gestacion',
    'Entero',
    'Lactancia',
];
const optionsdefuncion = [
   'Si',
   'No',
];
function formDatosMascotasSubmit() {
  if (datosMascotasStore.nombre.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar un nombre',
    });
    return;
  }
  if (datosMascotasStore.especie.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Debes agregar la especie',
    });
    return;
  }

  formulariosControl.setDatosMascotas(datosMascotasStore.$state);
  emit('submit', true);
}

</script>
<style scoped>
.botton{
  

  padding: 10px 20px;
  margin-top: 20px;
  
}

</style>
