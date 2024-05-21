/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';


export const useFormulariosControl = defineStore('formulariosControl', {
  state: () => ({
    Formularios: null,
  }),
  getters: {
    
  },
  actions: {
    setFormulario(Formularios: any) {
      this.Formularios = Formularios;
    },

    guardarInformacionEnLocalStorage() {
      // Obtener la lista actual de productores desde el localStorage

      const listaProductores: any = LocalStorage.getItem('productores') || [];

      const nuevoFormulario = {
        //cedula: (this.datosGenerales as any).cedula,
        Formularios: this.Formularios,
       
      };

      // Agregar el nuevo productor a la lista
      listaProductores.push(nuevoFormulario);
      // Guardar la lista actualizada en el localStorage
      LocalStorage.set('formulario', listaProductores);
    },
  },
});
