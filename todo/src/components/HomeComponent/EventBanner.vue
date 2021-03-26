<template>
  <div class="eventbanner_tab">
      <tiny-slider :mouse-drag="true" :loop="false" items="2" gutter="20">
        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>

        <img src="https://picsum.photos/1024/480/?image=10"/>
        <img src="https://picsum.photos/1024/480/?image=10"/>

  
    </tiny-slider>
  </div>
</template>

<script>

import VueTiny from 'vue-tiny-slider';

export default {
    components: {
    'tiny-slider': VueTiny
  }
}
</script>

<style>

</style>