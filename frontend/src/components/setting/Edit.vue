<template>
    <div v-if="logged">
        <div class="content" v-if="book">
            <hr />
            <div class="align-items-center mt-2" v-if="isCorrect">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Title</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        v-model="book.title"
                    />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Author</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Author"
                        aria-label="Author"
                        aria-describedby="basic-addon1"
                        v-model="book.author"
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" aria-label="Description">Description</span>
                    </div>
                    <textarea rows="8" cols="80" class="form-control" style="border:none; outline:none" v-model="book.description"></textarea>
                </div>
                <hr />
                <button class="btn btn-primary cus-btn-primary mb-3" @click="editBook">Edit Book</button>
            </div>
        </div>
        <Preloader v-if="!book"/>
    </div>
</template>

<script>
import Preloader from '../preloaders/Preloaderv1';
import AuthController from '../../controllers/auth.controller'
import SettingController from '../../controllers/setting.controller'
import BookController from '../../controllers/book.controller'

export default {
    name: 'Upload',
    data() {
        return {
            logged: '',
            bookId: this.$route.params.id,
            book: '',
            isCorrect: false
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
        async getBook() {
            const data = await BookController.informationBook(this.bookId);
            this.book = data.data[0];
            this.isCorrect = (this.book.userId === this.$cookies.get('userId')) ? true : false;
        },
        async editBook() {
            if (this.isCorrect) {
                const userId = this.$cookies.get('userId');
                const data = await SettingController.editBook(userId, this.bookId, this.book.title, this.book.author, this.book.description);
                this.$snotify.success(data.data);
                await this.getBook();
            }
        }
    },
    async mounted() {
        await this.cookie();
        await this.getBook();
    }
}
</script>

<style>

</style>
