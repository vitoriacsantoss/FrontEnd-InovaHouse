<script setup>
import ImovelList from '@/components/ImovelList.vue';

import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();


onMounted(async() => {
  await authStore.setToken(authToken);
  getUserInfo();
});

</script>

<template>
    <ImovelList />
</template>
