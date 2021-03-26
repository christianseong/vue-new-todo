<template>
  <div>
      <Header/>


      <div v-if="user">
          <h1> 접속한 유저</h1>
          <p>아이디 : {{user.id}} </p>
          <p>비밀번호 : {{user.password}} </p>
          <p>이름 : {{user.name}} </p>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
    data(){
        return {
            user : null
        }
    },
    created(){
        this.$http.get('http://localhost:4500/api/login')
        .then((res) => {
            const user = res.data.user;
            console.log(user);
            if(user) this.user = user;


        })
        .catch((err)=>{
            console.error(err);
        });
    },

    components :{
        Header
    }

}
</script>

<style>

</style>