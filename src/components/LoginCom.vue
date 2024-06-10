<template>
  <q-page class="flex flex-center col-12 pagina"  >
    <div class="header col-6">
      <div><img src="~assets/ovalo-negro.png" alt="Escudo de Cayambe" class="logo"></div>
      <td></td>
     
      <div class="title text-h3 text-weight-bold">Teletrámites GADIP-MC</div>
    
    <tr></tr> 
    <div class="form-container col-8">
    <q-form @submit.prevent="handleSubmit" >
      <q-input v-model="username" label="Ingrese Usuario" required />
      <q-input v-model="password" label="Ingrese Contraseña" type="password" required />
      <q-btn type="submit" color="teal" class="submit-button glossy">Ingresar</q-btn>
      <p v-if="error" class="error">{{ error }}</p>
    </q-form>
    <div class="extra-options ">
      <q-btn flat label="Ver Manual de Usuario" />
      <q-btn flat label="Crear Cuenta de Usuario" @Click="goTo('https://impuestos.gadipmc.gob.ec/Virtual/register.php')"/>
      <q-btn flat label="¿Olvido su Contraseña?" @Click="goTo1('https://impuestos.gadipmc.gob.ec/Virtual/OlviClave.php')" />
    </div>
    <div class="footer">
      <p>© 2024 GADIP-MC</p>
    </div>
  </div>
</div>
  </q-page>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.post('/api/login', {
      username: username.value,
      password: password.value,
    });

    // Handle successful login
    const token = response.data.token; // Assuming the API returns a token
    localStorage.setItem('token', token); // Store the token in local storage
    router.push('/dashboard'); // Redirect to the dashboard
  } catch (err) {
    error.value = err.response.data.message;
  }
};
function goTo(url: string) {
   window.open(url, '_blank')
 }
 function goTo1(url: string) {
   window.open(url, '_blank')
 }
</script>

<style scoped>
.header {
  background-color: teal;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.submit-button{
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  
}

.logo {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-container {
  background-color: #fff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 375px;
  text-align: center;
}

.extra-options {
  margin-top: 20px;
}

.error {
  color: red;
  margin-top: 10px;
}

.footer {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>