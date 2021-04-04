<template>
    <div v-if="logged">
        <Preloader v-if="!books"/>
        <div class="content" v-if="isLoaded">
            <ul class="list-card" v-if="books">
                <div class="card" style="width: 18rem;"
                    v-for="(book, index) in books"
                    v-bind:item="book"
                    v-bind:index="index"
                    v-bind:key="book.id"
                >
                <button class="btn btn-danger" style="position:absolute; left:0" @click="deleteBook(book.id)">Delete</button>
                <router-link :to="'editbook/' + book.id" class="btn btn-warning" style="position:absolute; right:0">Edit</router-link>
                <router-link :to="'/informationbook/' + book.id">
                    <img class="card-img-top"
                      :src="book.image"
                      alt="Card image cap"
                      style="height: 266.66px"
                    >
                    <div class="card-body">
                        <h3 class="card-title">{{ book.title }}</h3>
                        <p class="card-date">{{ book.date | moment("MMMM D, YYYY") }}</p>
                    </div>
                </router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import Preloader from '../preloaders/Preloaderv1';
import AuthController from '../../controllers/auth.controller'
import SettingController from '../../controllers/setting.controller'

export default {
    name: 'Profile',
    data() {
        return {
            isLoaded: false,
            logged: '',
            books: ''
        }
    },
    components: {
        Preloader
    },
    methods: {
        async cookie() {
            const userId = this.$cookies.get('userId');
            const data = await AuthController.checkCookie(userId);
            this.logged = data.data;
        },
        async getYourBooks() {
            const data = await SettingController.getYourBooks(this.logged.id);
            this.books = data.data;
        },
        async deleteBook(id) {
            const data = await SettingController.deleteBook(id, this.logged.id);
            this.$snotify.success(data.data[1]);
            this.books = '';
            this.getYourBooks();
        }
    },
    async mounted() {
        await this.cookie();
        await this.getYourBooks();
        setTimeout(() => {
            this.isLoaded = true;
        }, 1550);
    }
}
</script>

<style>

</style>
