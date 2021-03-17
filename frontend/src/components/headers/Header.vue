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
                <li class="nav-item">
                    <router-link to="/signin" class="nav-link">Sign in</router-link>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'header',
    mounted() {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', 'http://localhost:8080/script/navbar.js')
        document.head.appendChild(externalScript)
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
