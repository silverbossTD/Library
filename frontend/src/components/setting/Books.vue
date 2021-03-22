<template>
    <div v-if="isLoaded">
        <div class="content" v-if="logged">
            <h1>Books</h1>
        </div>
        <Preloader />
    </div>
</template>

<script>
import Preloader from '../preloaders/Preloaderv0';
import AuthController from '../../controllers/auth.controller';

export default {
    name: 'YourBooks',
    data() {
        return {
            isLoaded: false,
            logged: '',
        }
    },
    components: {
        Preloader
    },
    methods: {
        async cookie() {
            const userId = this.$cookies.get('userId');
            const data = await AuthController.checkCookie(userId);
            this.logged = data.data;
        }
    },
    mounted() {
        this.cookie();
        setTimeout(() => {
            this.isLoaded = true;
        }, 1550);
    }
}
</script>

<style>

</style>
