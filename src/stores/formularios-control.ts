/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';



export const useFormulariosControl = defineStore('formulariosControl', {
  state: () => ({
    DatosGenerales: null,
    DatosMascotas:null,
  }),
  getters: {
    
  },
  actions: {
    setDatosGenerales(DatosGenerales: any) {
      this.DatosGenerales = DatosGenerales;
    },
    setDatosMascotas(DatosMascotas: any) {
      this.DatosMascotas = DatosMascotas;
      },

    guardarInformacionEnLocalStorage() {
      // Obtener la lista actual de productores desde el localStorage

      const listaProductores: any = LocalStorage.getItem('productores') || [];

      const nuevoFormulario = {
        //cedula: (this.datosGenerales as any).cedula,
        DatosGenerales: this.DatosGenerales,
       
      };

      // Agregar el nuevo productor a la lista
      listaProductores.push(nuevoFormulario);
      // Guardar la lista actualizada en el localStorage
      LocalStorage.set('formulario', listaProductores);
    },
  },
});
