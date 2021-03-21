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
.headerContainer {
    background: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 650px;
}
</style>
