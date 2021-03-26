<template>
  <div id="app" class="container">
   <h1 class= "text-center">Todo App</h1>

   <input 

   v-model = "inputtext"
   type="text" 
   class="w-100 p-2  " 
   placeholder="할 일을 적으세요!"
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

   {{todos}}
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
        {id : 2, text : "고양이 밥 주기", checked :false},
        {id : 3, text : "코딩 하기", checked :false},
      ],

      inputtext : ""
      
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


      this.inputtext = ""
    },

    toggleInAppVue({id, checked}){
      const index = this.todos.findIndex(todo => {
        return todo.id = id;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
