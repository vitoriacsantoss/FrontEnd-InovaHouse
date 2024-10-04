<script setup>
import { onMounted, watch } from 'vue';
import { useImoveisStore } from '@/stores/imovel';

import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const props = defineProps(['category_id']);
const imoveisStore = useImoveisStore();

async function getImoveis() {
  if (props.category_id) {
    await imoveisStore.getImovelByCategory(props.category_id);
  } else {
    await imoveisStore.getImoveis();
  }
}

watch(
  () => props.category_id,
  async () => {
    await getImoveis();
  },
);

onMounted(async () => {
  await getImoveis();
});
</script>

<template>
  <div class="imovel-list">
    <router-link :to="{ name: 'ImoveltAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link>
    <div v-if="imoveisStore.products.length === 0">
      <p>Produtos não encontrados!!!</p>
    </div>
    <div v-for="imovel in imoveisStore.products" :key="imovel.id" class="imovel-card">
      <div class="imovel-img-wrapper">
        <img :src="imovel.image?.url" alt="imovel.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="imovel-title-price">
        <p>{{ formatTitle(imovel.title) }}</p>
        <p>{{ formatPrice(imovel.price * 1) }}</p>
      </div>
      <div class="imovel-description-stars">
        <p>{{ formatDescription(imovel.description) }}</p>
        <div class="stars">
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
          <i class="mdi mdi-star" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.icon {
  background-color: #0a2668;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 12rem;
  right: 20px;
}

.icon:hover {
  background-color: #bac9e8;
  color: #0a2668;
}

.icon i {
  font-size: 2rem;
}

.imovel-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.imovel-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.imovel-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.imovel-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.imovel-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.imovel-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.imovel-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.imovel-description-stars p {
  font-size: 12px;
  color: #535050;
}
</style>
