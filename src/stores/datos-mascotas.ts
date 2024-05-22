import { defineStore } from 'pinia';
export const useDatosMascotas = defineStore('formDatosMascotas', {

    state: () => ({
      nombre: '',
      especie: '',
      color: '',
      fechaNacimiento: '',
      sexo:'',
      edad: '',
      descripcion: '',
      raza: '',
      habitat:'',
      alimento:'',
      otroAlimento:'',
      obtencion:',',
      tenencia:'',
      reproductivo:'',
  
    }),
  
    getters: {
     
    },
    actions: {
      
    },
  });
  