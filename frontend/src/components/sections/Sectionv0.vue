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
}
section::after {
  position: absolute !important;
  bottom: -0;
  left: 0;
  content: '';
  width: 100% !important;
  height: 0% !important;
  background: none !important;
  background: none !important;
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
    .headerContainer {
        height: 100% !important;
    }
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
