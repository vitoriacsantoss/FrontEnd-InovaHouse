import { ref } from 'vue';
import { defineStore } from 'pinia';

import ImoveisService from '@/services/imovel';
const imoveisService = new ImoveisService();

export const useImoveisStore = defineStore('imoveis', () => {
  const imoveis = ref([]);
  const currentImovel = ref(null)

  async function getImoveis() {
    imoveis.value = await imoveisService.getImoveis();
    console.log(imoveis.value)
  }

  async function getImovelByCategory(category_id) {
    imoveis.value = await imoveisService.getImoveisByCategory(category_id);
  }

  async function createImovel(imovel) {
    await imoveisService.createImovel(imovel);
    getImoveis();
  }

  return { imoveis, getImoveis, getImovelByCategory, createImovel, currentImovel };
});
