import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

interface Formulario {
  DatosGenerales: any;
  DatosMascotas: any;
  VacunacionMascotas: any;
}

export const useFormulariosControl = defineStore('formulariosControl', {
  state: () => ({
    formularios: [] as Formulario[],
  }),
  getters: {
    // getters vacíos por ahora
  },
  actions: {
    setDatosGenerales(datosGenerales: any) {
      const nuevoFormulario = {
        DatosGenerales: datosGenerales,
        DatosMascotas: null,
        VacunacionMascotas: null,
      };
      this.formularios.push(nuevoFormulario);
    },
    setDatosMascotas(datosMascotas: any) {
      const ultimoFormulario = this.formularios[this.formularios.length - 1];
      if (ultimoFormulario) {
        ultimoFormulario.DatosMascotas = datosMascotas;
      } else {
        const nuevoFormulario = {
          DatosGenerales: null,
          DatosMascotas: datosMascotas,
          VacunacionMascotas: null,
        };
        this.formularios.push(nuevoFormulario);
      }
    },
    setVacunacionMascota(vacunacionMascota: any) {
      const ultimoFormulario = this.formularios[this.formularios.length - 1];
      if (ultimoFormulario) {
        ultimoFormulario.VacunacionMascotas = vacunacionMascota;
      } else {
        const nuevoFormulario = {
          DatosGenerales: null,
          DatosMascotas: null,
          VacunacionMascotas: vacunacionMascota,
        };
        this.formularios.push(nuevoFormulario);
      }
    },

    guardarInformacionEnLocalStorage() {
      const listaFormularios = JSON.parse(LocalStorage.getItem('formularios') || '[]');
      const nuevaListaFormularios = [...listaFormularios, ...this.formularios];
      LocalStorage.set('formularios', JSON.stringify(nuevaListaFormularios));
    },
  },
});