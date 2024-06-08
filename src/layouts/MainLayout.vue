<template>
  <q-layout view="hHh Lpr lFf" >
    <q-header elevated class="bg-primary text-white" >
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Mascotas
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      
    >
      <q-list>
        <q-item-label
          header
        >
      <div class="text-color-grey-10">MENU</div>
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from '../components/EssentialLink.vue'; // Asegúrate de que esté en el mismo directorio

interface EssentialLinkProps {
  title: string;
  caption?: string;
  icon?: string;
  link?: string;
}

const linksList: EssentialLinkProps[] = [
 
{
    title: ' Home',
    caption: '',
    icon: 'las la-home',
    link: 'home'
  },
 
 
  {
    title: 'formulario',
    caption: '',
    icon: 'las la-strikethrough',
    link: 'compo'
  },
  {
    title: 'Mascotas',
    caption: '',
    icon: 'las la-paw',
    link: 'mascotas'
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value =!leftDrawerOpen.value;
}
</script>
<!-- <style scoped>
.bg-primary {
  background-color: #9ca8bb; /* Change this to your desired color */
}

.text-white {
  color: white;
}
</style> -->