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
html {
    scroll-behavior: smooth;
}
body {
    overflow-x: hidden;
}
.cus-btn-primary {
    color: #fff;
    background-color: #409eff !important;
    border-color: #409eff !important;
}

.cus-btn-primary:hover {
    background-color: #5d9ddd !important;
    border-color: #59a8f7 !important;
}

.flash__wrapper {
    position: fixed;
    bottom: 0px;
    right: 10px;
    z-index:99;
    transition: 0.2s;
}
.flash__message {
    width: 300px;
}

</style>
