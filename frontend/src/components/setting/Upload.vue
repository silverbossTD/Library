<template>
    <div>
        <div class="content" v-if="isLoaded">
            <h1>Upload</h1>
        </div>
        <Preloader />
    </div>
</template>

<script>
import Preloader from '../preloaders/Preloaderv0';

export default {
    name: 'Upload',
    data() {
        return {
            isLoaded: false
        }
    },
    components: {
        Preloader
    },
    mounted() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 1550);
    }
}
</script>

<style>

</style>
