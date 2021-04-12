<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" style="color:white">SILVERLIBRARY</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/books" class="nav-link">Books</router-link>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item dropdown">
                    <a href="#pinBooks" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="getPinBooks()">Pin Books</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="width: 250px;height:200px;overflow:auto">
                        <div
                            v-for="(book, index) in pinBooks"
                            v-bind:item="book"
                            v-bind:index="index"
                            v-bind:key="book.id"
                            class="container"
                        >
                        <router-link :to="'/informationbook/' + book.id">
                            {{ book.name }}
                        </router-link>
                        </div>
                        <div class="container" v-if="!pinBooks.length">
                            <h3 style="text-align:center">No Books</h3>
                        </div>
                    </div>
                </li>
                <li class="nav-item" v-if="!logged">
                    <router-link to="/signin" class="nav-link">Sign in</router-link>
                </li>
                <li class="nav-item dropdown" v-if="logged">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img :src="logged.avatar" height="25px"> {{ logged.username }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <router-link to="/setting/profile" class="dropdown-item">Setting</router-link>
                      <a class="dropdown-item" href="#" style="color:red" @click="logout">Log out</a>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
    </div>
</template>

<script>
import AuthController from '../../controllers/auth.controller'

export default {
    name: 'header',
    data() {
        return {
            logged: '',
            pinBooks: ''
        }
    },
    methods: {
        async cookie() {
            const userId = this.$cookies.get('userId');
            const data = await AuthController.checkCookie(userId);
            this.logged = data.data;
        },
        async logout() {
            this.$cookies.remove('userId');
            this.cookie();
            this.$snotify.info('Successfully logged out');
            this.$router.go(this.$router.currentRoute);
        },
        async getPinBooks() {
            this.pinBooks = JSON.parse(localStorage.getItem("Books"));
        }
    },
    mounted() {
        this.cookie();
        let header = document.querySelector(".navbar");

        window.onscroll = function() {
            if (window.pageYOffset > 600) {
                header.classList.add("bg-light");
                header.classList.add("navbar-light");
                header.classList.remove("navbar-dark");
                document.getElementsByClassName('navbar-brand')[0].style.color = 'black';
            } else {
                document.getElementsByClassName('navbar-brand')[0].style.color = 'white';
                header.classList.remove("bg-light");
                header.classList.remove("navbar-light");
                header.classList.add("navbar-dark");
            }
        }
    },
}
</script>

<style>
.navbar {
    transition: 0.3s;
}
.navbar-brand {
    letter-spacing: 3px;
}
.nav-item {
    transition: 0.3s;
    border-radius: 3px;
    margin-left: 10px;
}
.nav-item:hover {
    background-color: rgba(220,220,220,0.15);
}
</style>
