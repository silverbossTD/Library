<template>
    <div class="body container">
        <Preloader v-if="!books"/>
        <div id="list" v-if="books">
            <hr />
            <h1 class="p-3 text-center">Trending Books</h1>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                    <ul class="list-card">
                        <div class="card" style="width: 18rem;"
                            v-for="(book, index) in books.slice(0, 3)"
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
                            <div class="card-description container">
                                <p>{{ book.description.slice(0, 180) + '...' }}</p>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{{ book.title }}</h3>
                                <p class="card-date">{{ book.date | moment("MMMM D, YYYY") }}</p>
                            </div>
                        </router-link>
                        </div>
                    </ul>
                </div>
                <div class="carousel-item">
                    <ul class="list-card">
                        <div class="card" style="width: 18rem;"
                            v-for="(book, index) in books.slice(3, 6)"
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
                            <div class="card-description container">
                                <p>{{ book.description.slice(0, 180) + '...' }}</p>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">{{ book.title }}</h3>
                                <p class="card-date">{{ book.date | moment("MMMM D, YYYY") }}</p>
                            </div>
                        </router-link>
                        </div>
                    </ul>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <hr />

            <h1 class="p-3 text-center">Recommended Reads</h1>
            <ul class="list-card" id="recommendedReads">
                <div class="card" style="width: 18rem;"
                    v-for="(book, index) in books.slice(6, 10)"
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
                    <div class="card-description container">
                        <p>{{ book.description.slice(0, 180) + '...' }}</p>
                    </div>
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
    name: 'header',
    data() {
        return {
            books: ''
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

<style>

</style>
