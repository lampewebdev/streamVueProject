<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="todo-list-items">
      <TodoListItem 
        v-for="item in todoItems" 
        :key="item.index" 
        :index="item.index" 
        :todoText="item.todoText"
        v-on:removeItem="removeItem"
      />
    </div>
    <TodoListAddItem v-on:addNewItem="onItemAdded" />
  </div>
</template>

<script>
import uuidv4  from 'uuid/v4';
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TodoListAddItem
  },
  data: function() {
    // TODO: Load data from an external API!
    return {
      todoItems: [
        {
          index: uuidv4(),
          todoText: `hallo I'm an item`
        },
        {
          index: uuidv4(),
          todoText: `second item!`
        }
      ]
    };
  },
  methods: {
    onItemAdded: function(todoText) {
      this.todoItems.push({
        index: uuidv4(),
        todoText
      });
    },
    removeItem: function(index) {
      this.todoItems = this.todoItems.filter(
        (todoItem) => todoItem.index !== index
      )
    }
  }
};
</script>