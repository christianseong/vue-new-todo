<template>
     <div>
         <input type="checkbox" :checked = "todo.checked">
         <span class="ms-3">{{todo.text}}</span>
        
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
  }
    
}
</script>

<style scoped>

</style>
