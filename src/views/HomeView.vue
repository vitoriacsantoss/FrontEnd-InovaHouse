<script setup>
import ImovelList from '@/components/ImovelList.vue';

import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

      await authStore.setToken(authToken);
    
onMounted(() => {
  getUserInfo();
});

</script>

<template>
  <imovel-list />
</template>
