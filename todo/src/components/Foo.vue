<template>
  <div>
      <Header/>
      <Nav/>
      <Aside/>
      <Main/>
      
      
  </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import Aside from '../components/Aside'
import Main from '../components/Main'


export default {
    data(){
        return {

        }
    },

    components :{
        Header,
        Nav,
        Aside,
        Main,
        
        
    }

}
</script>

<style>

</style>