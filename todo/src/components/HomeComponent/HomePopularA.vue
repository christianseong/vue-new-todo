<template>

  <a href="/search/product?keyword=%EC%98%A4%EB%B2%84%ED%95%8F">
  <li class="Home_keyword__3uB-r">
      <span class="Home_keyword-rank__1-pZ6">
          {{this.getIdx}}</span>&nbsp;
        <span class="Home_keyword-text__mxGWy">
            오버핏
        </span>
        </li>
</a>
</template>

<script>
export default {
 data(){
     return{
        rank : 1
     }
 },

 props : {
     getIdx : Number
 }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

.Home_keyword__3uB-r{
    color: #495057;
    text-decoration: none;
    height: 24px;
    line-height: 14px;
    margin-top: 10px;
    font-size: 14px;
}

.Home_keyword-rank__1-pZ6{
    display: inline-block;
    color: #4285f4;
    font-weight: 700;
    width: 22px;
    margin-right: 11px;
}

.Home_keyword-text__mxGWy{
        color: #495057;
}
</style>