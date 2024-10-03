<script setup>
import ProductList from '@/components/ProductList.vue';

import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

      await authStore.setToken(authToken);
    
onMounted(() => {
  getUserInfo();
});

</script>

<template>
  <product-list />
</template>
