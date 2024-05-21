<template>
    <q-page >

        <q-form 
      @submit="formDatosGeneralesSubmit"
      class="row "
      id="FormularioDatosGenerales"
      @validation-error="(ref: any) =>ref.$el.scrollIntoView({ block: 'center', behavior: 'smooth' })">
           <div class="col-6  q-mx-auto">
            <div class="q-mx-auto text-h3">Formulario</div>
            <q-input
        type="text"
        v-model="datosGeneralesStore.apellido"
        label="Apellidos:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el apellido',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]"
        class="col-12"
      />
      <q-input
        type="text"
        v-model="datosGeneralesStore.nombre"
        label="Nombres:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el nombre',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]"
        class="col-12"
      />
      <q-input
  type="text"
  v-model="datosGeneralesStore.direccion"
  label="Dirección:"
  lazy-rules
  :rules="[
    (val) => (val !== null && val !== '') || 'Coloque la dirección',
  ]"
  class="col-12"
/>
<q-input
        type="text"
        v-model="datosGeneralesStore.ocupacion"
        label="Ocupacion:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque el nombre',
          (val) =>
            /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]+$/.test(val) ||
            'Caracteres incorrectos (números o signos)',
        ]"
        class="col-12"
      />
      <q-input
        type="text"
        v-model="datosGeneralesStore.cedula"
        label="Número de Cedula:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su Cédula ',
          (val) => /^\d+$/.test(val) || 'Ingrese solo números',
          (val) => val.length == 10 || 'Cédula debe contener 10 números ',
        ]"
        class="col-12"
      />
    
      <q-input
        type="text"
        v-model="datosGeneralesStore.telefono"
        label="Número de Teléfono:"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Coloque su teléfono ',
          (val) => /^\d+$/.test(val) || 'Ingrese solo números',
          (val) => val.length == 10 || 'Teléfono debe contener 10 números ',
        ]"
        class="col-12"
      />
      <q-input
  type="tel"
  v-model="datosGeneralesStore.telefono_fijo"
  label="Teléfono Fijo:"
  lazy-rules
  :rules="[
    (val) => (val !== null && val !== '') || 'Coloque el teléfono fijo',
    (val) => /^\d{7,10}$/.test(val) || 'Ingrese un teléfono fijo válido',
  ]"
  class="col-12"
/>
      <q-select
        label="Tipo:"
        v-model="datosGeneralesStore.tipos"
        :options="opcionesTipo"
        class="col-12"
      />
      <q-input
  type="email"
  v-model="datosGeneralesStore.correo"
  label="Correo"
  lazy-rules
  :rules="[
    (val) => (val !== null && val !== '') || 'Coloque su Correo',
    (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'Ingrese un correo válido',
  ]"
  class="col-12"
/>
      
      <q-btn type="submit" label="Continuar" color="primary" class="col-12" />
    </div>    
    </q-form>
    </q-page>

</template>
<script setup lang="ts">
import { useDatosGenerales } from 'src/stores/datos-generales';
import { useFormulariosControl } from 'src/stores/formularios-control';
import { useQuasar } from "quasar";
// import { useState } from 'vue';
const $q = useQuasar();
const emit = defineEmits(['submit']);
const datosGeneralesStore = useDatosGenerales();
const formulariosControl = useFormulariosControl();
const opcionesTipo = [
  'Barrio',
  'Comunidad',
  'Parroquia',
];
function formDatosGeneralesSubmit() {
  if (datosGeneralesStore.nombre.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.apellido.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.direccion.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.ocupacion.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.cedula.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.telefono.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });
    return;
  }
  if (datosGeneralesStore.tipos.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });

    return;
  }
  if (datosGeneralesStore.correo.length == 0) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'no Dejes el campo en blanco',
    });

    return;
  }

  formulariosControl.setDatosGenerales(datosGeneralesStore.$state);
  emit('submit', true);
  formulariosControl.guardarInformacionEnLocalStorage();
}
// function guardarEnLocalStorage() {
//   localStorage.setItem('formData', JSON.stringify(formData.value));
// }
</script>