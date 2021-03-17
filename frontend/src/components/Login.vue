<template>
    <div>
        <section class="text-center headerContainer p-5">
            <div class="container" style="padding-top: 80px">
                <div class="row">
                    <div class="col" id="loginForm">
                        <h1>Login</h1>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email...">
                            <input type="password" class="form-control" placeholder="Password...">
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%; margin: 10px;">Login</button>
                        </div>
                    </div>
                    <div class="col" id="RegisterForm">
                        <h1>Register</h1>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username...">
                            <input type="text" class="form-control" placeholder="Email...">
                            <input type="password" class="form-control" placeholder="Password...">
                            <input type="password" class="form-control" placeholder="Repeat Password...">
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%; margin: 10px;">Register</button>
                        </div>
                    </div>
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
    name: 'Login',
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

input {
    margin: 10px;
    padding: 10px;
}
</style>
