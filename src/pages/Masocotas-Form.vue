<template>
    <div class="text-h4 q-mx-auto">
      Formularios Guardados
      <q-table
        :rows="formularios"
        :columns="columns"
        row-key="id"
      />
    </div>
  </template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useFormulariosControl } from '../stores/formularios-control';

const formulariosControl = useFormulariosControl();
const formularios = formulariosControl.$state.formularios;

const columns = [
  {
    name: 'DatosGenerales',
    label: 'Datos Generales',
    field: 'DatosGenerales',
    align: 'left',
  },
  {
    name: 'DatosMascotas',
    label: 'Datos Mascotas',
    field: 'DatosMascotas',
    align: 'left',
  },
  {
    name: 'VacunacionMascotas',
    label: 'Vacunación Mascotas',
    field: 'VacunacionMascotas',
    align: 'left',
  },
];
</script>