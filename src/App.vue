<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view> 
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'app-header': Header
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
