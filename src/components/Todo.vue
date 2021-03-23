<template>
     <div class="mb-2 d-flex">
         <div>
             <input type="checkbox" :checked = "todo.checked" @change="toggleCheckBox">
        </div>   
         {{ todo.checked }}
         
         <span 
         class="ms-3 flex-grow-1"
         :class = "todo.checked ? 'text-muted' : ' '"
         :style="todo.checked ? 'text-decoration: line-through' : ''"

         >{{todo.text}}</span>


         <button class = "btn btn-danger btn-sm"
         @click="clickDelete">삭제</button>
        
    </div>
</template>

<script>

export default {
  
  data(){
      return {

      }
  },
  props : {
      todo : {
          type : Object,
          required : true
      }
  },

  methods: {
      toggleCheckBox(e){
          this.$emit('toggle-checkbox', {
              id : this.todo.id,
              checked : e.target.checked
          })
      },

      clickDelete(){
          this.$emit('delete-todos', this.todo.id)
      }
  }
    
}
</script>

<style scoped>

</style>
