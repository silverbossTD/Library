<template>
    <div class="body container" id="list">
        <Preloader v-if="!books"/>
        <div class="content" v-if="books">
            <h1 class="p-3 text-center">All Books</h1>
            <ul class="list-card">
                <div class="card" style="width: 18rem;"
                    v-for="(book, index) in books"
                    v-bind:item="book"
                    v-bind:index="index"
                    v-bind:key="book.id"
                >
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
import Preloader from '../preloaders/Preloaderv1'
import BookController from '../../controllers/book.controller'

export default {
    name: 'bodyv1',
    data() {
        return {
            books: '',
        }
    },
    components: {
        Preloader
    },
    methods: {
        async getBooks() {
            const data = await BookController.getBooks();
            this.books = data.data;
        }
    },
    mounted() {
        this.getBooks();
    }
}
</script>
