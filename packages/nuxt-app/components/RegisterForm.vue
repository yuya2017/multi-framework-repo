<template>
  <form @submit.prevent="register">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <button type="submit">Register</button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const register = async () => {
      try {
        const res = await axios.post('/api/register', {
          name: name.value,
          email: email.value,
        });
        if (res.data.success) {
          message.value = 'Registration successful!';
        }
      } catch (error) {
        console.error(error);
        message.value = 'Registration failed.';
      }
    };

    return { name, email, register, message };
  },
});
</script>
