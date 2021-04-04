<template>
  <div class="Main">
      <span><router-link to="/main/zett">Zett</router-link></span>
      <span><router-link to="/main/sova">Sova</router-link></span>
      <span><router-link to="/main/reyna">Reyna</router-link></span>
      <span><router-link to="/main/phoenix">Phonix</router-link></span>
      <router-view/>
      <div class=slider @mousedown="out">
        <div class=left @mousemove="resultFunleft" ></div>
          <div id="result"><img :src=curimg alt=""></div>
        <div class=right @mousemove="resultFunright"></div>
          <img src="@/assets/title.jpg" alt="">
      </div>
  </div>
</template>

<script>

export default {
  data(){
        
        return{
          curimg:""
        }
  },
  
    methods:{
      resultFunleft(e){
         var positionLeft = e.pageX-20;
         var positionTop = e.offsetY+70;
         document.getElementById('result').style.left = positionLeft+"px";
         document.getElementById('result').style.top = positionTop+"px";
         document.getElementById('result').style.backgroundImage ="url('https://decodedadvertising.com/images/ui/icon-arrows-slider-left.svg')";
      },
      resultFunright(e){
         var positionLeft = e.pageX-20; // mouse.X
         var positionTop = e.offsetY+70; // mouse.Y
         document.getElementById('result').style.left = positionLeft+"px";
         document.getElementById('result').style.top = positionTop+"px";
         document.getElementById('result').style.backgroundImage ="url('https://decodedadvertising.com/images/ui/icon-arrows-slider-right.svg')";
      },
      out(e){
        document.getElementById('result').style.backgroundImage ="";
        console.log(e);
      }
    }
}
</script>

<style scoped>
.Main{
    background-color: grey;
    position: relative;
    display: flex;
    flex-direction: column;
    top:70px;
    left:0;
    width:100%;
    height: 100%;
}
.slider{
  height:500px;
  width:1200px;
  cursor: none;
}
.slider>img{
  height:500px;
  width:1200px;
}
.left{
  position:absolute;
  height:500px;
  width:600px;
}
.right{
  position:absolute;
  left:600px;
  height:500px;
  width:600px;
}
#result{
  position: absolute;
  width: 30px;
  height: 30px;

}
</style>