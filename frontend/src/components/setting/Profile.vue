<template>
    <div v-if="logged">
        <div class="content" v-if="isLoaded">
            <div>
                <div class="d-flex flex-row align-items-center mt-2">
                    <img :src="logged.avatar" width="60" class="rounded">
                    <div class="ml-3">
                        <input
                            type="file"
                            name="avatar"
                            class="form-control"
                            id="file-upload"
                            accept="image/jpeg"
                            @change="onFileChange"
                        />
                    </div>
                    <input type="submit" style="display: none" id="uploadAvatar">
                </div>
            </div>
            <div class="align-items-center mt-2">
                <h3>Username: {{ logged.username }}</h3>
                <h3>Description:</h3><textarea rows="8" cols="80" v-model="logged.description" style="border:none; outline:none"></textarea>
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
            this.flashSuccess(data.data);
            this.cookie();
        },
        async onFileChange(e) {
            const image = e.target.files[0];

            const userId = this.$cookies.get('userId');
            const data = await SettingController.updateAvatar(userId, image);
            this.flashSuccess(data.data);
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
