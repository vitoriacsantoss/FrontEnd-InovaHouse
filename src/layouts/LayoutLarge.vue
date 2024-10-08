<script setup>
import LargeHeader from '@/components/templates/large/LargeHeader.vue';
import LargeFooter from '@/components/templates/large/LargeFooter.vue';
</script>
<template>
  <div id="layout-large">

    <large-header />


    <aside>
      <router-view />
    </aside>

    <large-footer />

  </div>
</template>
<style scoped>
#layout-large {
  display: flex;
  flex-direction: column;

  /* grid-template-columns: 1fr 5fr; */
  /* grid-template-rows: auto 1fr auto; */
  /* grid-template-areas:
    'header'
    'main'
    'footer';  */
  min-height: 100vh;
  width: 100%;
  /* border: 2px solid red; */

}

header {
  display: flex;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
  /* grid-area: header; */
  /* border: 2px solid red; */

}

aside {
  border-right: #eeeeee 1px solid;
  box-shadow: 0 0 10px 0 #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  /* grid-area: aside; */
  /* border: 2px solid red; */
  margin: 20px auto;
  padding: 1rem;
}

main {
  min-height: 80%;

  padding: 2rem;
  grid-area: main;
}

footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #eeeeee;
  /* grid-area: footer; */
  /* border: 2px solid red; */

}
</style>
