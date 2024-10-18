<!-- <script setup>
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
  console.log(getImoveis.value)
});
</script>

<template>
  <div class="imovel-list">
    <router-link :to="{ name: 'ImovelAdd' }">
      <button class="icon ">
        <i class="mdi mdi-plus" />
      </button>
    </router-link>
    <div v-if="imoveisStore.imoveis.length === 0">
      <p>Produtos não encontrados!!!</p>
    </div>
    <div v-for="imovel in imoveisStore.imoveis" :key="imovel.id" class="imovel-card">
      <div class="imovel-img-wrapper">
        <img :src="imovel.foto?.url" alt="imovel.name" />
        <i class="mdi mdi-heart-outline" />
      </div>
      
      <div class="imovel-title-price">
        <p> 
          {{ formatPrice(imovel.preco * 1) }}</p>
      </div>
      <div class="imovel-title-price">
        <p>{{ (imovel.localizacao) }}</p>
      </div>
      
      <div class="imovel-description-stars">
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
  margin-bottom: 30px;
  margin-top: 50px;
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
</style> -->


<script setup>
// import DestaqueView from '@/components/DestaqueView.vue'
import { ref } from 'vue'
const estado = ref('')

</script>

<template>
  <div class="banner">
    <div class="carousel__item">
      <img src="https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg" alt="">
    </div>
    <div class="form">
            <!-- <div class="form2"> -->
            <!-- <div class="caixinha"> -->

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Comprar</option>
        <option value="Alugar">Alugar</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Todos</option>

      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Cidades</option>
        <option value="Joinville">Joinville</option>
        <option value="Araquari">Araquari</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Bairros</option>
        <option value="Joinville">Boehmerwald</option>
        <option value="Araquari">Fátima</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Quartos</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>
      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Banheiros</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>

      <select class="caixinha1" v-on:keypress="ok = false">
        <option value="">Garagem</option>
        <option value="um">01</option>
        <option value="dois">02</option>
        <option value="mais">mais</option>
      </select>

      <button class="botao" @click="$router.push({ name: 'buscar' })">BUSCAR</button>
     
    </div>
  </div>
  <div class="destaques">
    <destaque-view />
  </div>
</template>

<style scoped>
.carousel__item {
  /* height: auto; */
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../public/banner-1.jpg');
  /* background-image: url('../../public/banner-1.jpg'); */
  padding-top: 200px;
  padding-bottom: 200px;
  background-size: cover;
}
.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: #ffffff;
  width: 20%;
  margin-left: 16px;
  padding: 10px 140px;
  border: 2px solid #f28a31;
  transition: background-color 1s ease, color 1s ease;
  justify-content: center;
}

.principal {
  display: flex;
  flex-direction: row;
}

.form2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  /* border-radius: 2%; */
  /* margin-left: 200px;
  margin-top: 50px; */
  /* padding: 20px; */
  /* height: 20%; */
  /* background-color: #f28a31; */
}

/* .caixinha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
} */



.caixinha1 {
  /* font-weight: bold; */
  padding: 0 70px;
  width: 40%;
  margin-left: 16px;
  background-color: #f2f2f2;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: white;
  font-size: 15px;
  background: #01081d80;
  /* margin-top: 10%; */
}

.titu {
  color: aliceblue;
  font-size: 80px;
}

.form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  padding: 30px;
  /* font-weight: bold; */
  border-top: 7px solid #f28a31;
  background-color: #0f0f4180;
  height: 400px;
  width: 700px;
  position: absolute;
}


.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.destaques {
  margin-top: 100px;
}

.carousel__item {
  height: 760px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
  padding-top: 200px;
  padding-bottom: 200px;
  background-size: cover;
}
</style>

<!-- 
<script>
import { useImoveisStore } from '../stores/imovel';
import { computed, onMounted } from 'vue';

export default {
  setup() {
    const imoveisStore = useImoveisStore();

    // Computed para conectar com a lista de produtos no store
    const imoveis = computed(() => imoveisStore.imoveis);
    const selectedImoveis = computed({
      get: () => imoveisStore.selectedImoveis,
      set: (value) => (imoveisStore.selectedImoveis = value),
    });

    // Busca produtos ao montar o componente
    onMounted(() => {
      imoveisStore.fetchImoveis();
    });

    const buscar = () => {
      console.log('Imoveis selecionados:', selectedImoveis.value);
    };

    return {
      imoveis,
      selectedImoveis,
      buscar,
    };
  },
};
</script>
<template>
  <div class="container">
    <h1>Selecione os Imoveis</h1>
    <form @submit.prevent="buscar">
      <label for="imoveis">Escolha os imoveis:</label>
      <select v-model="selectedImoveis" multiple>
        <option v-for="imovel in imoveis" :key="imovel.preco" :value="imovel.preco">{{ imovel.preco }}</option>
      </select>
      <br /><br />
      <button type="submit">Buscar</button>
    </form>

    <div v-if="imoveis.length === 0">
  <p>Carregando imóveis...</p>
</div>
<div v-else>
  <h3>Imoveis selecionados:</h3>
      <ul>
        <li v-for="imovel in selectedImoveis" :key="imovel">{{ imovel.preco }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.container{
  padding: 50px;
  background-color: aqua;
}
form {
  margin-bottom: 20px;
}
</style> -->