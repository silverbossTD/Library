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
.list-card {
    display: flex;
    flex-wrap: wrap;
}
.card {
    width: 200px !important;
    height: 376.66px !important;
    margin: auto;
    border: none;
}
.card-img-top {
    transition: 0.2s;
}
.card:hover .card-img-top {
    box-shadow: 5px 10px 20px #c6c6c6;
}
.card:hover .card-description {
    top: 0;
    visibility: visible;
    opacity: 1;
}
.card-description {
    visibility: none;
    opacity: 0;
    transition: 0.2s;
    position: absolute;
    top: 50px;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    height: 266.66px;
    transition: 0.5s;
}
.card-title {
    color: #409eff !important;
    font-size: 15px;
    text-decoration: underline !important;
}
.card-date {
    color:silver;
}
</style>
