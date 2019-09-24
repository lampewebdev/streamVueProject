<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br />
    <span v-on:click="toggleHeart">
      <span v-if="liked">🧡</span>
      <span v-else>🖤</span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() { 
    return {liked: false}
  },
  methods: {
    toggleHeart: function() {
      this.liked = !this.liked
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
