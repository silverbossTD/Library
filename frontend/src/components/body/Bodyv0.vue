<template>
    <div v-if="user">
        <nav class="navbar navbar-expand-lg navbar-light container">
          <div>
            <div class="navbar-nav">
                <router-link to="/setting/profile" class="nav-link active">Profile</router-link>
                <router-link to="/setting/upload" class="nav-link">Upload</router-link>
                <router-link to="/setting/yourbooks" class="nav-link">Your Books</router-link>
            </div>
          </div>
        </nav>

        <div class="body container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bodyv0',
    props: ['user']
}
</script>

<style>
.body {
    height: 100px;
}
</style>
