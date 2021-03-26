<template>
  <main class="home_main">
      <HomeDesktop/>
  </main>
</template>

<script>

import HomeDesktop from './HomeComponent/HomeDesktop'

export default {
     data(){
        return {

        }
    },

    components:{
        HomeDesktop
    }
}
</script>

<style>
.home_main{
    margin-left: 115px;
}


main{
    display: block;
    min-height: 100%;
    height: 100%;
    padding-bottom: 150px;
    padding-top: 148px;
}

.home_desktop{
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    height: 380px;
}

.eventbanner_tab{
    position: relative;
    width: 680px;
}



</style>