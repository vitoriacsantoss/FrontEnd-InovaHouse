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

    <div class="banner1">
        <div class="inner-text">
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
    </div>

    <div class="imovel">
    <ImovelList />
  </div>
</template>

 <style scoped>
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



.inner-text {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  
  
}


.banner1 {
  background-image: url('https://www.rafaelfonsecaimoveis.com.br/assets/img/banner-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    height: 800px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
   
}
</style>