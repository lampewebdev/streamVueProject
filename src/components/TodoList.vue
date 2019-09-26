<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="todo-list-items">
      <TodoListItem v-for="item in todoItems" :key="item.index" :todoText="item.todoText" />
    </div>
    <TodoListAddItem v-on:addNewItem="onItemAdded" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TodoListAddItem
  },
  data: function() {
    return {
      todoItems: [
        {
          index: 1,
          todoText: `hallo I'm an item`
        },
        {
          index: 2,
          todoText: `second item!`
        }
      ]
    };
  },
  methods: {
    onItemAdded: function(todoText) {
      this.todoItems.push({
        index: (this.todoItems.length+1),
        todoText
      });
    }
  }
};
</script>

<style>
</style>