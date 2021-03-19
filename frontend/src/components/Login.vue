<template>
    <div>
        <Preloader />
        <FlashMessage :position="'right top'"/>
        <section class="text-center headerContainer p-5">
            <div class="container" style="padding-top: 80px">
                <div class="row">
                    <div class="col" id="loginForm">
                        <h1>Login</h1>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Email..."
                                v-model="login.email"
                            />
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Password..."
                                v-model="login.password"
                            />
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%; margin: 10px;" @click="loginUser">Login</button>
                        </div>
                    </div>
                    <div class="col" id="RegisterForm">
                        <h1>Register</h1>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Username..."
                                v-model="register.username"
                            />
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Email..."
                                v-model="register.email"
                            />
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Password..."
                                v-model="register.password"
                            />
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Repeat Password..."
                                v-model="register.repeatPassword"
                            />
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%; margin: 10px;" @click="registerUser">Register</button>
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
import Preloader from './Preloader';
import AuthController from '../controllers/auth.controller'
import Section from './sections/Sectionv0';
import Footer from './footers/Footer';

export default {
    name: 'Login',
    components: {
        Preloader,
        Section,
        Footer
    },
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
            register: {
                username: '',
                email: '',
                password: '',
                repeatPassword: '',
            }
        }
    },
    methods: {
        async loginUser() {
            if (this.login.email == '' ||
                this.login.password == ''
            ) {
                this.flashError('Wrong email or password');
                return;
            }
            const data = await AuthController.login(this.login.email, this.login.password);
            if (data.data[0] === "errors") {
                this.flashError(data.data[1]);
                return;
            }
            this.$cookies.set('userId', data.data[2]);
            this.flashSuccess(data.data[1]);
            this.$router.go(this.$router.currentRoute);
        },
        async registerUser() {
            if (this.register.username == '' ||
                this.register.email == '' ||
                this.register.password == '' ||
                this.register.repeatPassword == ''
            ) {
                this.flashError('Please enter your full information');
                return;
            }

            if (this.register.password != this.register.repeatPassword) {
                this.flashError('Incorrect password');
                return;
            }

            const data = await AuthController.register(this.register.username, this.register.email, this.register.password);
            if (data.data[0] === "errors") {
                this.flashError(data.data[1]);
                return;
            }
            this.flashSuccess(data.data[1]);
        }
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
.flash__wrapper {
    position: fixed;
    bottom: 0px;
    right: 10px;
    z-index:99;
    transition: 0.2s;
}
.flash__message {
    width: 300px;
}

</style>
