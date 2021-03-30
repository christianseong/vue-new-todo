<template>
  <section class="home_desktop">
      <EventBanner/>
      <Popular/>
  </section>
</template>

<script>
import EventBanner from './EventBanner'
import Popular from './Popular.vue'

export default {
    data(){
        return {

        }
    },

    components:{
        EventBanner,
        Popular
    }

}
</script>

<style>

</style>