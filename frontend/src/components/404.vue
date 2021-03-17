<template>
    <div>
        <section class="text-center headerContainer p-5">
            <div class="container" style="padding-top: 80px">
                <h1 style="color:white;font : normal 300 64px/1 'Josefin Sans', sans-serif;text-shadow: 5px 5px black;">Oops!</h1>
                <h2 style="color:white;font : normal 300 50px/1 'Josefin Sans', sans-serif;text-shadow: 5px 5px black;">404 Not Found</h2>
                <div class="error-details">
                    <p style="color:white;font : normal 300 40px/1 'Josefin Sans', sans-serif;text-shadow: 5px 5px black;">Sorry, an error has occured, Requested page not found!</p>
                </div>
            </div>
        </section>
        <Section />
        <Footer />
    </div>
</template>

<script>
import Section from './sections/Sectionv0';
import Footer from './footers/Footer';
export default {
    name: 'Not found',
    components: {
        Section,
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
</style>
