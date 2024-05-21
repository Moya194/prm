import { defineStore } from 'pinia';


export const useDatosGenerales = defineStore('formDatosGenerales', {

  state: () => ({
    nombre: '',
    telefono_fijo: '',
    cedula: '',
    // fecha: '',
    jefeHogar:'',
    instruccion: '',
    telefono: '',
    correo: '',
    ocupacion:'',
    apellido:'',
   direccion:'',
   tipos:','


  }),

  getters: {
   
  },
  actions: {
    
  },
});
