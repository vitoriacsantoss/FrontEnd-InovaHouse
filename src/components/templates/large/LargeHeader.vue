<script setup>
import MButton from '@/components/MButton.vue'

</script>

<template>
  <img src="@/assets/logo.png" alt="Logo" class="logo" />
  <div class="header-content">
    <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->
    <div class="logo_and_menu">
      <logo-title class="mb-2" />
      <div class="divider" />
      <div class="menu">
        <router-link to="/">
          <m-button texto="Home" />
        </router-link>
        <router-link to="/login">
          <m-button texto="Página de Login"/>
        </router-link>
        <router-link to="/imoveis/adicionar">
          <m-button texto="Adicionar Imovel"/>
        </router-link>
      </div>
      <div class="divider" />
    </div>
  </div>

  <!-- <div class="icons">
    
    <i class="mdi mdi-magnify" />
    <i class="mdi mdi-account-circle-outline" />
    <i class="mdi mdi-cart-outline" />
  
  </div> -->
</template>

<style scoped>
.login {
  margin-left: 50px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.imovel {
  margin-left: 50px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.home {
  margin-left: 20px;
  height: 40px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.header-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -80px;
}

.mr {
  margin-right: 10px;
}

button {
  /* background-color: #ff8c32; */
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #e07626;
}

/* .menu{
  margin-top: -90px;
  margin-bottom: 40px;
  margin-left: 200px; 
  background-color: #ff8c32; 
  padding: auto;
} */
.logo {
  width: 100px;
  margin-left: 60px;
  margin-top: 30px;

}

.icons {
  display: flex;
  gap: 1rem;
  align-items: end;
  justify-content: end;
  font-size: 2rem;
  border: 2px solid red;
  width: 100%;
  gap: 1rem;
}</style>
