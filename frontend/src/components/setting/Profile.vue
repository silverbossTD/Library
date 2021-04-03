<template>
    <div v-if="logged">
        <div class="content" v-if="isLoaded">
            <div>
                <div class="d-flex flex-row align-items-center mt-2">
                    <img :src="logged.avatar" width="60" class="rounded">
                    <div class="ml-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input
                                    type="file"
                                    name="avatar"
                                    class="custom-file-input"
                                    id="file-upload"
                                    accept="image/jpeg"
                                    @change="onFileChange"
                                />
                                <label class="custom-file-label" for="inputGroupFile01" style="top:0px !important;">Update your avatar</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="align-items-center mt-2">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" :value="logged.username">
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" aria-label="Description">Description</span>
                    </div>
                    <textarea rows="8" cols="80" class="form-control" v-model="logged.description" style="border:none; outline:none"></textarea>
                </div>
                <hr />
                <button class="btn btn-primary cus-btn-primary mb-3" @click="editProfile">Edit Profile</button>
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
    name: 'Profile',
    data() {
        return {
            isLoaded: false,
            logged: '',
            file: ''
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
        async editProfile() {
            const userId = this.$cookies.get('userId');
            const data = await SettingController.editProfile(userId, this.logged.description);
            this.$snotify.success(data.data);
            this.cookie();
        },
        async onFileChange(e) {
            const image = e.target.files[0];

            const userId = this.$cookies.get('userId');
            const data = await SettingController.updateAvatar(userId, image);
            this.$snotify.success(data.data);
            this.$router.go(this.$router.currentRoute);
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
