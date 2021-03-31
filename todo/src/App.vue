<template>
  <div id="app">

  <!--
   <h1 class= "text-center">Todo App</h1>

   <input 

   v-model = "inputtext" 

   type="text" 
   class="w-100 p-2 " 
   placeholder="오늘의 할 일!"
   @keypress.enter="addToDo"
   >



<hr>
 
   <Todo 
   @toggle-checkbox ="toggleInAppVue"
   @delete-todos = "deleteTodos"
   v-for="todo in todos" 
   :key = "todo.id"
   :todo = "todo"
   />

-->
   <router-view></router-view>
  

  
  </div>
</template>

<script>
/* 
import Todo from '@/components/Todo.vue'
import Header from '@/components/Header.vue'
*/


export default {
  name: 'App',
  components: {
    /*
      Todo,
    Header
    */ 
  
  },

  data(){
    return {
      todos : [
        {id : 1, text : "커피 마시기", checked :false},
        {id : 2, text : "고양이 밥 주기", checked :false},
        {id : 3, text : "코딩 하기", checked :false},
      ],

      inputtext : ""
      
    }
  },

  methods : {
    addToDo(e){
      
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked: false
      })


      console.log(e.target.value)
      this.inputtext = ""
    },

    toggleInAppVue({id, checked}){
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });

     



      this.todos[index].checked = checked;
    },

    deleteTodos(id){
      /*const index = this.todos.findIndex(todo => {
        return todo.id = id;
      });

      this.todos.splice(index,1)*/

      this.todos = this.todos.filter(todo => todo.id != id)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  text-align: center;
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
  min-width: 1100px;
  min-height: 100%;
  height: 100%;
  width: 1100px;
  padding: 0px 10px;
}
</style>
