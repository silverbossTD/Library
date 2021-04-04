<template>
    <div>
        <Preloader />
        <Section v-bind:user="user"/>
        <Body v-bind:user="user"/>
        <Footer />
    </div>
</template>

<script>
import AuthController from '../controllers/auth.controller'
import Preloader from './preloaders/Preloader';
import Section from './sections/Sectionv1';
import Body from './body/Bodyv0';
import Footer from './footers/Footer';

export default {
    name: 'Login',
    data() {
        return {
            user: ''
        }
    },
    components: {
        Preloader,
        Section,
        Body,
        Footer
    },
    methods: {
        async cookie() {
            const userId = this.$cookies.get('userId');
            const data = await AuthController.checkCookie(userId);
            this.user = data.data;
        }
    },
    mounted() {
        this.cookie();
    }
}
</script>

<style>
.headerContainer2 {
    background: url('../assets/background2.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 650px;
}
.spinner-btn {
    width: 150px;
}
</style>
