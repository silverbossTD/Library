<template>
    <div>
        <section class="text-center headerContainer2 p-5">
            <div class="container" style="padding-top: 80px">
                <div v-if="user">
                    <h1 style="text-shadow: 0px 5px black;">Setting page</h1>
                    <p style="text-shadow: 0px 5px black;">Edit your profile</p>
                    <p style="text-shadow: 0px 5px black;">Let's share your great books</p>
                    <a href="#list"><span></span></a>
                </div>
                <div v-else>
                    <h1 style="text-shadow: 0px 5px black;">Setting page</h1>
                    <p style="text-shadow: 0px 5px black;">Login to upload books, edit your profile</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'section',
    props: ['user']
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);

section {
  position: relative;
  width: 100%;
  height: 100%;
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

.headerContainer2 p {
    color: #fff;
    font : normal 300 40px/1 'Josefin Sans', sans-serif;
}
.headerContainer2 h1 {
    color: #fff;
    font : normal 350 55px/1 'Josefin Sans', sans-serif;
}
.headerContainer2 a {
    position: absolute;
    bottom: 50px;
    left: 50%;
}
.headerContainer2 a span {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
    z-index:99;
}
.headerContainer2 a span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
    box-sizing: border-box;
}

.headerContainer2 a span::after {
    position: absolute;
    bottom: -18px;
    left: 50%;
    width: 18px;
    height: 18px;
    content: '';
    margin-left: -9px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
}

.headerContainer2 a:hover {
    opacity: .5;
}
.headerContainer2 button {
    font-size: 25px;
}

@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@media (max-width: 500px) {
    .headerContainer2 p {
        color: #fff;
        font : normal 300 50px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer2 h1 {
        color: #fff;
        font : normal 350 40px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer2 button {
        font-size: 20px;
    }
}
@media (max-width: 404px) {
    .headerContainer2 p {
        color: #fff;
        font : normal 300 20px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer2 h1 {
        color: #fff;
        font : normal 350 30px/1 'Josefin Sans', sans-serif;
    }
    .headerContainer2 button {
        font-size: 15px;
    }
}
</style>
