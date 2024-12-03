<script setup>
import ImovelList from '@/components/ImovelList.vue';

import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();


onMounted(async() => {
  const authToken = localStorage.getItem('psg_auth_token')
  await authStore.setToken(authToken);
  // getUserInfoe();
});

</script>

<template>
    <ImovelList />
</template>
