<template>
    <div v-if="logged">
        <div class="content" v-if="isLoaded">
            <div>
                <div class="d-flex flex-row align-items-center mt-2">
                    <div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="image"
                                    class="custom-file-input"
                                    id="image-upload"
                                    accept="image/jpeg"
                                    @change="onImageChange"
                                />
                                <label class="custom-file-label" for="inputGroupFile01" style="top:0px !important;">Upload your book image</label>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">PDF</span>
                            </div>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="pdf"
                                    class="custom-file-input"
                                    id="file-upload"
                                    accept="application/pdf"
                                    @change="onFileChange"
                                />
                                <label class="custom-file-label" for="inputGroupFile01" style="top:0px !important;">Upload your pdf file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="align-items-center mt-2">
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
                        v-model="title"
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
                        v-model="author"
                    />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" aria-label="Description">Description</span>
                    </div>
                    <textarea rows="8" cols="80" class="form-control" style="border:none; outline:none" v-model="description"></textarea>
                </div>
                <hr />
                <button class="btn btn-primary cus-btn-primary mb-3 spinner-btn" @click="uploadBook">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="spinner"></span>
                    Upload Book
                </button>
            </div>
        </div>
        <Preloader />
    </div>
</template>

<script>
import Preloader from '../preloaders/Preloaderv0';
import AuthController from '../../controllers/auth.controller'
import SettingController from '../../controllers/setting.controller'

export default {
    name: 'Upload',
    data() {
        return {
            isLoaded: false,
            spinner: false,
            logged: '',
            image: '',
            pdf: '',
            title: '',
            description: '',
            author: ''
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
            this.spinner = false;
        },
        async onImageChange(e) {
            this.image = e.target.files[0];
        },
        async onFileChange(e) {
            this.pdf = e.target.files[0];
        },
        async uploadBook() {
            if (this.image != '' && this.title != '' && this.description != '' && this.author != '') {
                this.spinner = true;
                const image = this.image;

                const userId = this.$cookies.get('userId');
                const data = await SettingController.uploadBook(userId, image, this.title, this.description, this.author, this.pdf);
                this.$snotify.success(data.data);
                this.image = '';
                this.title = '';
                this.description = '';
                this.author = '';
                this.pdf = '';
                return;
            }
            this.$snotify.error('Please enter all the information');
        }
    },
    mounted() {
        this.cookie();
        setTimeout(() => {
            this.isLoaded = true;
        }, 1550);
    }
}
</script>

<style>

</style>
