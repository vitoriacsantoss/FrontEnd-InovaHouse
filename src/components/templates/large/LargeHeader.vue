<script setup></script>

<template>
  <div class="header-content">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
       <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <button class="icon mdi mdi-home-outline mr"> Home </button>
      </router-link>
      <router-link to="/login">
          <button class="contact-button mr">Página de Login</button>
        </router-link>
      <router-link to="/imoveis/adicionar">
          <button class="contact-button">Adicionar Imovel</button>
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
.mr{
  margin-right: 10px;
}
button {
  background-color: #ff8c32;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #e07626;
}
.menu{
  margin-top: -60px;
  margin-bottom: 40px;
  margin-left: 200px;
  /* background-color: #ff8c32; */
  padding: auto;
}
.logo {
  width: 100px;
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
}

</style>
