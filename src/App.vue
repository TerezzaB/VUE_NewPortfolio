<template>
  <nav class="flex">
    <div class="flex-none w-20"><i class="pi pi-star"></i><i class="pi pi-sparkles"></i></div>
    <div class="flex-1 w-30"></div>
    <div class="flex-1 w-50">
      <router-link to="/" class="mr-10">Home</router-link>
      <router-link :to="{ name: 'About' }" class="mr-10">About</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav { border-bottom: 1px solid var(--third-color); padding: 20px; font-weight: bold;}

nav a.router-link-exact-active {
  color: var(--main-color);
}
</style>
