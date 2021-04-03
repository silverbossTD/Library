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
                    <a :href="'data:application/pdf;base64,' + book.text" :download="book.title" class="button_downloads m-1" style="width: 100%" >
                        <span class="button__text">Download</span>
                        <span class="button__icon">
                            <ion-icon name="cloud-download-outline"></ion-icon>
                        </span>
                    </a>
                    <button class="button_read m-1" style="width: 100%;color: white" data-toggle="modal" data-target="#readBook">
                        <span class="button__text">Read Online</span>
                        <span class="button__icon">
                            <ion-icon name="book-outline"></ion-icon>
                        </span>
                    </button>
                    <textarea readonly v-model="book.description" style="border:none;outline:none;height:100%;width:100%;overflow:auto"></textarea>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="readBook" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title d-flex" id="exampleModalLabel">Read Book Online <input type="text" class="form-control ml-2" placeholder="Page" v-model="currentPage" style="width: 100px"> / {{pageCount}} Pages</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style="overflow:auto">
                        <div class="d-flex">
                            <button type="button" class="btn btn-primary mr-2" @click="currentPage--">Previous</button>
                            <button type="button" class="btn btn-primary" @click="currentPage++">Next</button>
                        </div>
                        <pdf
                            :src="'data:application/pdf;base64,' + book.text"
                            @num-pages="pageCount = $event"
                            @page-loaded="currentPage = $event"
                            :page="parseInt(currentPage)"
                            >
                        </pdf>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
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

import pdf from 'vue-pdf'

export default {
    name: 'Information',
    components: {
        Preloader,
        Preloaderv1,
        Section,
        pdf,
        Footer
    },
    data() {
        return {
            book: '',
            logged: '',
            like: false,
            currentPage: 1,
			pageCount: 0,
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
                this.$snotify.error('Login to like this book');
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

.button_downloads,
.button_read {
    display: inline-flex;
    height: 50px;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    cursor: pointer;
    color: white;
    transition: 0.3s;
    opacity: 0.8;
}

.button_downloads:hover,
.button_read:hover {
    color: white;
    text-decoration: none;
    opacity: 1;
}

.button_read:focus,
.button_downloads:focus {
    outline: none;
}

.button_downloads {
    background: #009578;
}

.button_read {
    background: #e5db1d;
}

.button__text,
.button__icon {
    display: inline-flex;
    align-items: center;
    padding: 0 24px;
    width: 100%;
    height: 100%;
}

.button__icon {
    font-size: 1.5em;
    float: right;
    background: rgba(0, 0, 0, 0.08);
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
