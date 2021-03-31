<template>
    <section class="home_popular">
        <header class="home_popular_header">
            인기검색어
        </header>

        <hr class="home_popular_hr">

        <div class="home_popular_flex">
            <ul class="home_column_direction">
                <HomePopularA  v-for = "(i,idx) in 10" :key = "idx" ></HomePopularA>
            
            </ul>
        </div>

    </section>
</template>

<script>
import HomePopularA from './HomePopularA';

export default {
  components: { HomePopularA },
  data(){
      return {
          post:{
              index : 0,
              category : []

          }
      }
  },
  created(){
        this.$http.get('http://localhost:3000/product/category',{
            headers :{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset = utf-8'
            }
        })
        .then((res) => {
            const result = res.data;
            console.log(result);
            if(result) this.category.push(result);


        })
        .catch((err)=>{
            console.error(err);
        });
    },


}
</script>

<style scoped>
div{
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline
}

.home_popular{
    width: 240px;
    margin-left: 23px;
}

.home_popular_header{
    text-align: left;
    font-weight: 700;
    color: #343a40;
    height: 27px;
    line-height: 27px;
    font-size: 18px;
    margin-bottom: 10px;
}

.home_popular_hr{
    margin: 0;
    border: 0;
    border-top: 1px solid #c7cdd4;
}

.home_popular_flex{

    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}

.home_column_direction{
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: left;
    list-style: none;
  
}


</style>