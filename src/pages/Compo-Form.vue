<template>
<q-page class="bg-white text-center">
    <div class="text-weight-bolder text-h4">FORMULARIO DE REGISTRO DE MASCOTAS</div>
<DatosGenerales/> 
<DatosMascotas/>
</q-page >


</template>

<script setup lang="ts">
import DatosGenerales from 'src/components/DatosGenerales.vue';
import DatosMascotas from 'src/components/DatosMascotas.vue';
</script>