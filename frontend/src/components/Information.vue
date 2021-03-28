<template>
    <div>
        <Preloader />
        <Section />
        <div class="body container" id="list">
            <Preloaderv1 v-if="!book"/>
            <div class="row" v-if="book">
                <div class="col-3 m-4 informationBook" style="border-right: 1px solid silver">
                    <img :src="book.image" class="informationBookImage">
                    <h3>{{ book.title }}</h3>
                    <h5>Author: <u>{{ book.author }}</u></h5>
                    <h5>Upload date: {{ book.date | moment("MMMM D, YYYY") }}</h5>
                    <div class="heart-btn" @click="addStar">
                        <div class="content-heart">
                            <span class="heart"></span>
                            <span class="numb">{{ book.stars }}</span>
                        </div>
                    </div>
                </div>
                <div class="col m-4">
                    <a :href="'data:application/pdf;base64,' + book.text" :download="book.title" class="btn btn-primary cus-btn-primary m-1" style="width: 100%" >Download</a>
                    <button class="btn btn-primary cus-btn-primary m-1" style="width: 100%">Read Online</button>
                    <textarea readonly v-model="book.description" style="border:none;outline:none;height:100%;width:100%;"></textarea>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import AuthController from '../controllers/auth.controller'
import BookController from '../controllers/book.controller'

import Preloader from './preloaders/Preloader';
import Preloaderv1 from './preloaders/Preloaderv1'

import Section from './sections/Section';
import Footer from './footers/Footer';

export default {
    name: 'Information',
    components: {
        Preloader,
        Preloaderv1,
        Section,
        Footer
    },
    data() {
        return {
            book: '',
            logged: '',
            like: false,
            bookId: this.$route.params.id
        }
    },
    methods: {
        async cookie() {
            const userId = this.$cookies.get('userId');
            const data = await AuthController.checkCookie(userId);
            this.logged = data.data;
        },
        async getBook() {
            const data = await BookController.informationBook(this.bookId);
            this.book = data.data[0];
            if (this.logged) {
                this.like = this.book.userlike.includes(this.logged.username) ? true : false;
            }
        },
        async addStar() {
            if (!this.logged) {
                this.flashError('Login to like this book');
                return;
            }
            const content = document.querySelector('.content-heart');
            content.onclick = async () => {
                this.like = !this.like;
                document.querySelector('.content-heart').classList.toggle('heart-active');
                document.querySelector('.numb').classList.toggle('heart-active');
                document.querySelector('.heart').classList.toggle('heart-active');
                if (this.like) {
                    document.querySelector('.numb').innerHTML = ++this.book.stars;
                    this.book.userlike.push(this.logged.username);
                    await BookController.likeBook(this.bookId, this.book.userlike, this.book.stars);
                } else {
                    document.querySelector('.numb').innerHTML = --this.book.stars;
                    const index = this.book.userlike.indexOf(this.logged.username);
                    this.book.userlike.splice(index, 1);
                    await BookController.likeBook(this.bookId, this.book.userlike, this.book.stars);
                }
            };
        }
    },
    async mounted() {
        await this.cookie();
        await this.getBook();
        if (this.like) {
            console.log('hi');
            document.querySelector('.content-heart').classList.toggle('heart-active');
            document.querySelector('.numb').classList.toggle('heart-active');
            document.querySelector('.heart').classList.toggle('heart-active');
        }
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
.informationBook {
    border-right: 1px solid silver;
}
.informationBookImage {
    height: 330px;
    width: 100%;
}
.heart-btn{
    width: 80%;
    height: 61px;
    position: absolute;
}
.content-heart{
    height: 61px;
    padding: 13px 16px;
    display: flex;
    border: 2px solid #eae2e1;
    border-radius: 5px;
    cursor: pointer;
}
.content-heart.heart-active{
    border-color: #f9b9c4;
    background: #fbd0d8;
}
.heart{
    position: absolute;
    background: url("../assets/hearts.png") no-repeat;
    background-position: left;
    background-size: 2900%;
    height: 90px;
    width: 90px;
    top: 50%;
    left: 40%;
    transform: translate(-50%,-50%);
}
.numb{
    position: absolute;
    top: 25%;
    left: 55%;
    font-size: 21px;
    font-weight: 600;
    color: #9C9496;
    font-family: sans-serif;
}
.text.heart-active{
    color: #000;
}
.heart.heart-active{
    animation: animate .8s steps(28) 1;
    background-position: right;
}
@keyframes animate {
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}

@media (max-width: 764px) {
    .informationBook {
        border: none;
    }
    .informationBookImage {
        height: 200px;
    }
}
@media (max-width: 450px) {
    .informationBook {
        border: none !important;
    }
    .informationBookImage {
        height: 150px;
    }
}
@media (max-width: 300px) {
    .informationBook {
        border: none !important;
    }
    .informationBookImage {
        height: 100px;
    }
}
</style>
