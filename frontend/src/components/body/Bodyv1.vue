<template>
    <div class="body container">
        <div class="page-loader2" v-if="!books">
            <div class="cube2"></div>
            <div class="cube2"></div>
            <div class="cube2"></div>
            <div class="cube2"></div>
        </div>
        <div class="content" v-if="books">
            <h1 class="p-3 text-center">All The Books</h1>
            <ul class="list-card">
                <div class="card" style="width: 18rem;"
                    v-for="(book, index) in books"
                    v-bind:item="book"
                    v-bind:index="index"
                    v-bind:key="book.id"
                >
                  <a href="#">
                      <img class="card-img-top"
                        :src="book.image"
                        alt="Card image cap"
                        style="height: 266.66px"
                      >
                      <div class="card-body">
                        <h3 class="card-title">{{ book.title }}</h3>
                        <p class="card-date">{{ book.date }}</p>
                      </div>
                  </a>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import BookController from '../../controllers/book.controller'

export default {
    name: 'bodyv1',
    data() {
        return {
            books: '',
        }
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
