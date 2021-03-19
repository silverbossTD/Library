<template>
  <div>
      <Header />
      <router-view></router-view>
      <flash-message class="myCustomClass"></flash-message>
  </div>
</template>

<script>
import Header from './components/headers/Header';

export default {
  name: 'App',
  components: {
      Header
  }
}
</script>

<style>
body {
    overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
