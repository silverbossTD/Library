<template>
    <div>
        <Preloader />
        <Section />
        <Body />
        <Footer />
        <router-view></router-view>
    </div>
</template>

<script>
import Preloader from './preloaders/Preloader';
import Section from './sections/Section';
import Body from './body/Body';
import Footer from './footers/Footer';

export default {
    name: 'Home',
    components: {
        Preloader,
        Section,
        Body,
        Footer
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

.headerContainer {
    background: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 650px;
}
</style>
