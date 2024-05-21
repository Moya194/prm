<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input v-model="email" type="email" name="email" required />

    <label for="password">Password:</label>
    <input v-model="password" type="password" name="password" required />

    <button type="submit">Login</button>
  </form>

  <p v-if="error">{{ error }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from '../boot/axios';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const login = async () => {
      try {
        const response = await axios.post('/api/login', {
          email: email.value,
          password: password.value,
        });

        // Handle successful login
      } catch (err) {
        error.value = err.response.data.message;
      }
    };

    return {
      email,
      password,
      error,
      login,
    };
  },
});
</script>