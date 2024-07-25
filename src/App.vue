<template>
  <nav class="flex">
    <div class="flex-none w-20"><i class="pi pi-star"></i><i class="pi pi-sparkles"></i></div>
    <div class="flex-1 w-30"></div>
    <div class="flex-1 w-50">
      <router-link to="/" class="mr-10">Home</router-link>
      <router-link :to="{ name: 'About' }" class="mr-10">About Me</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </nav>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer
  }
}
</script>

<style>

/* Global Header */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
}
nav { position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--third-color); padding: 20px; font-weight: bold; background-color: #14142a;}
nav a.router-link-exact-active { color: var(--main-color); }



/* Moving Arrow in Home and About Page */
@keyframes arrowAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  00% { transform: translateY(0); } 
}
.arrow_svg { animation: arrowAnimation 1s infinite; }
.arrow_svg:hover { cursor: pointer; }
</style>
