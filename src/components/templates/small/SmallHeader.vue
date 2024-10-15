<template>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />

  <div class="header-content">
      <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->
       <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <button class="home"> Home </button>
      </router-link>
      <router-link to="/login">
          <button class="login">Página de Login</button>
        </router-link>
      <router-link to="/imoveis/adicionar">
          <button class="imovel">Adicionar Imovel</button>
        </router-link>
    </div>
    <div class="divider" /> 
    </div>
  </div>

  <!-- <div class="header-container">
    <div class="header-content">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
       <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
    </div>
    <div class="divider" /> 
    </div> -->

    <!-- Menu hambúrguer -->
    <!-- <nav v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><a href="#">Anuncie Agora</a></li>
        <li><a href="#">Pesquisar Imóvel</a></li>
      </ul>
    </nav> -->

    <!-- Seção de Pesquisa -->
    <!-- <div class="search-section">
      <button class="announce-btn">Anuncie Agora</button>
      <button class="search-btn">Pesquisar Imóvel</button>
    </div> -->

    <!-- Filtros de Imóveis -->
    <!-- <div class="filters">
      <button>Comprar</button>
      <button>Todos os Tipos</button>
      <button>Todos os Bairros</button>
      <input type="text" placeholder="Mínimo" />
      <input type="text" placeholder="Máximo" />
    </div> -->
    <!-- </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Controla o menu hambúrguer
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.login{
  margin-left: 10px;
  height: 30px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}
.imovel{
  margin-left: 10px;
  height: 30px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}
.home{
  margin-left: 85px;
  height: 30px;
  font-size: small;
  font-weight: 100;
  font-weight: bolder;
}

.header-content{
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-top: -80px;
}
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
/* .menu{
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 60px; */
  /* background-color: #ff8c32; */
/* } */
.logo {
  width: 100px;
}
.header-container {
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px;
}

.hamburger-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.mobile-menu {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #003354;
  padding: 20px;
  color: white;
  z-index: 1000;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
}

.mobile-menu li {
  margin: 10px 0;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
}

.search-section {
  margin: 20px 0;
}

.announce-btn, .search-btn {
  background-color: #f58220;
  color: white;
  padding: 10px 20px;
  border: none;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
}

.filters {
  background-color: rgba(0, 51, 84, 0.8);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filters button, .filters input {
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  font-size: 16px;
}

.filters button {
  background-color: #ffffff;
  border: none;
  cursor: pointer;
}

.filters input {
  border: none;
  text-align: center;
  font-size: 16px;
  color: #000;
}
</style>


<!-- <script setup>
// import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
    </div>
    <div class="divider" /> -->
    
    <!-- <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-account-circle-outline" /> Perfil
      </router-link>
      <router-link to="/">
        <i class="icon mdi mdi-cart-outline" /> Carrinho
      </router-link>
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
    </div> -->
  <!-- </div>
  <logo-title />
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style> -->
