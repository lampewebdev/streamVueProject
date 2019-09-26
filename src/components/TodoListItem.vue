<template>
  <div class="todo-item-list">
    {{ todoText }} 
    <span class="trash" v-on:click="removeItem"> X </span>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    "index": String,
    "todoText": String
  },
  methods:{
    editTodoText: function() {
      // TODO
    },
    removeItem: function(){
      this.$emit("removeItem", this.index);
    }
  }
};
</script>