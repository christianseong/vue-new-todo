<template>
  <div class="eventbanner_tab">
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" navigationEnabled="true" loop="true">
    <slide>
      <img src="https://static.lookpin.co.kr/20210322112551-1a56/b8dd9c9fe92d7652fcfb26b52b1d9531.jpg?resize=1000"/>
    </slide>
    <slide>
      <img src="https://static.lookpin.co.kr/20210322180857-3270/90fb24a6e6fca849301cdc8806616e81.jpg?resize=1000"/>
    </slide>
    <slide>
      <img src="https://static.lookpin.co.kr/20210317144226-1800/64d11e441a806ad408f24eafbf19a9ab.jpg?resize=1000"/>
    </slide>
    <slide>
      <img src="https://static.lookpin.co.kr/20210312100944-c0cf/698243d71a379cea491ccdd64840a9df.jpg?resize=1000"/>
    </slide>
    <slide>
      <img src="https://static.lookpin.co.kr/20210310163949-9dea/1f1d71d2fd5d788b6b1e2f6ac13a1fb3.jpg?resize=1000"/>
    </slide>
    <slide>
      <img src="https://static.lookpin.co.kr/20200525105805-736a/def3184afe485d6ee641ae13fa0f165e.jpg?resize=1000"/>
    </slide>
    </carousel>
  </div>
</template>

<script>

// import VueTiny from 'vue-tiny-slider';
import { Carousel, Slide } from 'vue-carousel';

export default {
  data() {
      return {

      }
    },

  methods: {
    
  },

  components: {
    // 'tiny-slider': VueTiny
    Carousel,
    Slide
  }

}
</script>

<style>
  .VueCarousel-pagination {
    /* position: absolute;
    bottom: 0;
    text-align: right !important;
    padding-right: 20px;
    padding-bottom: 10px; */
  }
  .VueCarousel-navigation {
    position: absolute;
    bottom: 90px;
    right: 29px;
  }
  .eventbanner_tab img{
    width: 100%;
  }
  .VueCarousel-navigation-button[data-v-453ad8cd] {
    background-color: rgb(255, 255, 255);
    margin-left: 1px;
  }
  .home_popular {
    width: 240px;
    background-color: grey;
  }
</style>