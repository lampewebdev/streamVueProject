<template>
    <form class="todo-list-add-item" @submit.prevent="additem" >
        <input v-model="todoText" placeholder="Enter your todo here!">
        <button> Add Item </button>
    </form>
</template>

<script>
export default {
    name: "TodoListAddItem",
    data: function() {
        return {
            todoText: '',
        }
    },
    methods: {
        additem: function () {
            this.$emit('addNewItem', this.todoText);
            this.todoText = '';
        }
    }
}
</script>

<style>

</style>