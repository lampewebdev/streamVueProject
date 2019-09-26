<template>
  <div class="todo-item-list">{{ todoText }}</div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["todoText"]
};
</script>

<style>
</style>