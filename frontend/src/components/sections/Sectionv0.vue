<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'section'
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);

section {
  position: relative;
  width: 100%;
  height: 800px !importan;
}
section::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 30%;
  background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 80%,rgba(0,0,0,.8) 100%);
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 80%,rgba(0,0,0,.8) 100%);
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

@media (max-width: 369px) {
    .headerContainer p {
        color: #fff;
        font : normal 300 20px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer h1 {
        color: #fff;
        font : normal 350 30px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer button {
        font-size: 15px;
    }
}
</style>
