import { ref } from 'vue';
import { defineStore } from 'pinia';

import ImoveisService from '@/services/imovel';
const imoveisService = new ImoveisService();

export const useImoveisStore = defineStore('imoveis', () => {
  const imoveis = ref([]);

  async function getImoveis() {
    imoveis.value = await imoveisService.getImoveis();
  }

  async function getImovelByCategory(category_id) {
    imoveis.value = await imoveisService.getProductsByCategory(category_id);
  }

  async function createImovel(imovel) {
    await imoveisService.createImovel(imovel);
    getImoveis();
  }

  return { imoveis, getImoveis, getImovelByCategory, createImovel };
});
