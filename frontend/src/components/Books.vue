<template>
    <div>
        <Preloader />
        <Section />
        <Body />
        <Footer />
    </div>
</template>

<script>
import Preloader from './preloaders/Preloader';
import Section from './sections/Section';
import Body from './body/Bodyv1';
import Footer from './footers/Footer';

export default {
    name: 'Books',
    components: {
        Preloader,
        Section,
        Body,
        Footer
    },
    mounted() {
        document.title = `SilverLibrary - books`;
    }
}

</script>

<style>

</style>
