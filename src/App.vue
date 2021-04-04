<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
 import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
     Header,
  }
}
</script>

<style>
#app {
  position: relative;
  display: block;
  top:0;
  left:0;
  width: 100%;
  height: 1000px;
}
</style>
