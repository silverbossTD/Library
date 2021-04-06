<template>
  <div>
      <Header />
      <router-view></router-view>
      <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import Header from './components/headers/Header';

export default {
    name: 'App',
    components: {
        Header
    },
    mounted() {
        if (!localStorage.getItem("Books")) {
            localStorage.setItem("Books", JSON.stringify([]));
        }
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
@import'~bootstrap/dist/css/bootstrap.css';
</style>
