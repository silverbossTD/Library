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
                            <div class="group">
                                <input
                                    type="text"
                                    required
                                    v-model="login.email">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                            <div class="group">
                                <input
                                    type="password"
                                    required
                                    v-model="login.password">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password</label>
                            </div>
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%" @click="loginUser">Login</button>
                        </div>
                    </div>
                    <div class="col" id="RegisterForm">
                        <h1>Register</h1>
                        <div class="form-group">
                            <div class="group">
                                <input
                                    type="text"
                                    required
                                    v-model="register.username">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Username</label>
                            </div>
                            <div class="group">
                                <input
                                    type="text"
                                    required
                                    v-model="register.email">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                            <div class="group">
                                <input
                                    type="password"
                                    required
                                    v-model="register.password">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password</label>
                            </div>
                            <div class="group">
                                <input
                                    type="password"
                                    required
                                    v-model="register.repeatPassword">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Repeat Password</label>
                            </div>
                            <button class="btn btn-primary cus-btn-primary" style="font-size: 20px !important; width: 100%" @click="registerUser">Register</button>
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
import Preloader from './preloaders/Preloader';
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
.group {
    position:relative;
    margin-bottom:25px;
}

input {
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid #757575;
    background: rgba(0, 0, 0, 0.2);
    color: white;
}
input:focus{ outline:none; }

label {
    color:#999;
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:25px;
    top:10px;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
}

input:focus ~ label, input:valid ~ label {
    top:-20px !important;
    font-size:14px;
    color: #409EFF;
}

.highlight {
    position:absolute;
    height:60%;
    width:100px;
    top:25%;
    left:0;
    pointer-events:none;
    opacity:0.5;
}

input:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}


</style>
