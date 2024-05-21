import { defineStore } from 'pinia';


export const useDatosGenerales = defineStore('formDatosGenerales', {

  state: () => ({
    nombre: '',
    edad: '',
    cedula: '',
    fecha: '',
    jefeHogar:'',
    instruccion: '',
    telefono: '',
    correo: '',
    ocupacion:'',
    apellido:'',
   


  }),

  getters: {
   
  },
  actions: {
    
  },
});
