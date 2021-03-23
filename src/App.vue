<template>
  <div id="app" class="container">
   <h1 class= "text-center">Todo App</h1>

   <input 
   type="text" 
   class="w-100 p-2  " 
   placeholder="할 일을 적으세요!"
   @keyup.enter="addToDo"
   >



<hr>
 
   <Todo 
   v-for="todo in todos" 
   :key = "todo.id"
   :todo = "todo"
   />
  </div>
</template>

<script>

import Todo from '@/components/Todo.vue'
export default {
  name: 'App',
  components: {
    Todo
  },

  data(){
    return {
      todos : [
        {id : 1, text : "커피 마시기", checked :false},
        {id : 2, text : "고양이 밥 주기", checked :true},
        {id : 3, text : "코딩 하기", checked :false},
      ]
    }
  },

  methods : {
    addToDo(e){
      //console.log(e.target.value)
      this.todos.push({
        id : Math.random(),
        text : e.target.value,
        checked: false
      })

      console.log(this.todos)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
