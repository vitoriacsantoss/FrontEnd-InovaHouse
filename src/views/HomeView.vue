<script setup>
import ImovelList from '@/components/ImovelList.vue';

import { onMounted } from 'vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();


onMounted(async () => {
  const authToken = localStorage.getItem('psg_auth_token')
  await authStore.setToken(authToken);
  // getUserInfoe();
});

</script>

<template>
  <div class="banner1">
    <div class="shadow"></div>
    <div class="inner-text">
    </div>
    <div class="form">
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

  <div class="imovel">
    <ImovelList />
  </div>
</template>

<style scoped>
.banner1 {
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  min-height: 400px;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.shadow {
  position: absolute;
  top: 0;
  width:100%;
  height: 100%;
  background-color:#01081d80;
  z-index: 1;
}


.botao {
  display: flex;
  align-items: center;
  background-color: #f28a31;
  color: #ffffff;
  width: 100%;
  max-width: 200px;
  margin: 16px auto;
  padding: 10px 20px;
  border: 2px solid #f28a31;
  transition: background-color 1s ease, color 1s ease;
  justify-content: center;
  border-radius: 5px; 
}

.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  border-top: 7px solid #f28a31;
  background-color: #102442;
  opacity: 80%;
  width: 90%;
  max-width: 700px;
  height: auto;
  min-height: 400px;
  position: relative;
  margin: 20px auto;
  border-radius: 10px; 
  z-index: 2;
}

.caixinha1 {
  padding: 0 10px;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  background-color: #01081d80;
  height: 38px;
  line-height: 38px;
  font-family: sans-serif;
  color: white;
  font-size: 15px;
  text-align: center; 
}

.inner-text {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}



@media (min-width: 768px) {
  .form {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
  }

  .caixinha1 {
    width: 40%;
    margin-left: 16px;
  }

  .botao {
    width: auto;
    padding: 10px 40px;
    margin-left: 16px;
  }
}

</style>