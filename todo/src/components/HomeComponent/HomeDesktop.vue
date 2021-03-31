<template>
  <section class="home_desktop">
      <EventBanner/>
      <HomePopular/>
  </section>
</template>

<script>
import EventBanner from './EventBanner'
import HomePopular from './HomePopular'

export default {
    data(){
        return {

        }
    },

    components:{
        EventBanner,
        HomePopular
    }

}
</script>

<style>
.home_desktop{
    display: flex;
    height: 380px;
}
</style>