<template>
  <div class="eventbanner_tab">

      <i id= "prevBtn" class = "fas fa-arrow-left" v-on:click="prevBtnClick()"></i>
     <i id= "nextBtn" class="fas fa-arrow-right" v-on:click="nextBtnClick()"></i>
    <div class = "carousel_slide" ref="carousel_slide">

      <img ref = "img0" src= "https://static.lookpin.co.kr/20210322112551-1a56/b8dd9c9fe92d7652fcfb26b52b1d9531.jpg?resize=1000" id ="lastClone" alt ="img" />
      <img ref = "img1" src= "https://static.lookpin.co.kr/20210322112551-1a56/b8dd9c9fe92d7652fcfb26b52b1d9531.jpg?resize=1000" id ="second" alt ="img" />
      <img ref = "img2" src= "https://static.lookpin.co.kr/20210322180857-3270/90fb24a6e6fca849301cdc8806616e81.jpg?resize=1000" id ="thrid" alt ="img" />
      <img ref = "img3" src= "https://static.lookpin.co.kr/20210317144226-1800/64d11e441a806ad408f24eafbf19a9ab.jpg?resize=1000"  id ="fourth" alt ="img" />
      <img ref = "img4" src= "https://static.lookpin.co.kr/20210312100944-c0cf/698243d71a379cea491ccdd64840a9df.jpg?resize=1000"  id ="fifth" alt ="img" />
      <img ref = "img5" src= "https://static.lookpin.co.kr/20210310163949-9dea/1f1d71d2fd5d788b6b1e2f6ac13a1fb3.jpg?resize=1000"  id ="sixth" alt ="img" />
      <img ref = "img6" src= "https://static.lookpin.co.kr/20200525105805-736a/def3184afe485d6ee641ae13fa0f165e.jpg?resize=1000"  id ="eighth" alt ="img" />
      <img ref = "img7" src= "https://static.lookpin.co.kr/20200525105805-736a/def3184afe485d6ee641ae13fa0f165e.jpg?resize=1000"  id ="firstClone" alt ="img" />

      <div class="eventbanner_slider_box">
        hello
      </div>
    </div>
  </div>

  
</template>

<script>



export default {
    data(){
        return {
          "counter" : 1,
          "length" : 8,
          "current_ref" : "img",
          "current_num" : 1
          
        }
    },

    methods :{
      prevBtnClick(){

        this.current_num--;

        const current = `this.$refs.${this.current_ref+this.current_num}.id`;
         

        this.$refs.carousel_slide.style.transition = "transform 0.4s ease-in-out"
        this.counter--;
        this.$refs.carousel_slide.style.transform = 'translateX('+(-(this.$refs.img0.clientWidth+0.5)*this.counter)+'px)';




          if(eval(current)=== 'lastClone'){
          this.$refs.carousel_slide.style.transition ="none";
          this.counter =  6;
          this.$refs.carousel_slide.style.transform='translateX('+(-(this.$refs.img0.clientWidth+0.5)*this.counter)+'px)'
          this.current_num = 6;

        }

        if(this.counter<=0){
          return;
        }


        console.log(current);




      },

       nextBtnClick(){

        this.current_num++;

        const current = `this.$refs.${this.current_ref+this.current_num}.id`;

     
        

       
        this.$refs.carousel_slide.style.transition = "transform 0.4s ease-in-out"
        this.counter++;
        this.$refs.carousel_slide.style.transform = 'translateX('+(-(this.$refs.img0.clientWidth+0.5)*this.counter)+'px)';
        //console.log(current);

          if(eval(current) === 'firstClone'){
          this.$refs.carousel_slide.style.transition ="none";
          this.counter =  1;
          this.$refs.carousel_slide.style.transform='translateX('+(-(this.$refs.img0.clientWidth+0.5)*this.counter)+'px)'
          this.current_num=1;


        }

        if(this.counter>= this.length){
          return;
        }
      },


    },
    mounted(){
      this.$refs.carousel_slide.style.transform = 'translateX('+(-(this.$refs.img0.clientWidth+0.5)*this.counter)+'px)';

      setTimeout(()=>{
        this.nextBtnClick()
        },3000);
    },

  
    watch : {
      counter(){
        //console.log("changed");
        setTimeout(()=>{
        this.nextBtnClick()
        },3000)
      }
    },

  

    components:{
        
    }

}


</script>

<style scoped>

*{
  padding :0px;
  margin : 0px;
  box-sizing: border-box;
}

.eventbanner_tab{
  position :relative;
  width: 680px;
  overflow: hidden;
}

.carousel_slide{
  width: 100%;
  display: flex;
  height: 380px;
}

#prevBtn{
  position : absolute;
  top : 50%;
  z-index: 10;
  left : 5%;
  font-size: 30px;
  color: white;
  opacity: 0.5;
  cursor: pointer;
}

#nextBtn{
  position : absolute;
  top : 50%;
  z-index: 10;
  right : 5%;
  font-size: 30px;
  color: white;
  opacity: 0.5;
  cursor: pointer;
}


</style>