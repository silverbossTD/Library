<template>
    <div>
        <Preloader />
        <section class="text-center headerContainer p-5">
            <div class="container" style="padding-top: 80px">
                <h1 style="color:white;font : normal 300 64px/1 'Josefin Sans', sans-serif;text-shadow: 5px 5px black;">{{ verify }}</h1>
            </div>
        </section>
        <Section />
        <Footer />
    </div>
</template>

<script>
import Preloader from './preloaders/Preloader';
import AuthController from '../controllers/auth.controller'
import Section from './sections/Sectionv0';
import Footer from './footers/Footer';

export default {
    name: 'Verify',
    data() {
        return {
            verify: '',
            userId: this.$route.params.id
        }
    },
    components: {
        Preloader,
        Section,
        Footer
    },
    methods: {
        async verifyUser() {
            console.log(this.userId);
            const data = await AuthController.verify(this.userId);
            this.verify = data.data;
        }
    },
    mounted() {
        this.verifyUser();
    }
}
</script>

<style>
.cus-btn-primary {
    color: #fff;
    background-color: #409eff !important;
    border-color: #409eff !important;
}

.cus-btn-primary:hover {
    background-color: #5d9ddd !important;
    border-color: #59a8f7 !important;
}

input {
    margin: 10px;
    padding: 10px;
}
</style>
