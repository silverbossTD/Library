<template>
    <div class="page-loader" v-if="!isLoaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>
    export default {
        name: 'preloader',
        data() {
            return {
                isLoaded: false
            }
        },
        mounted() {
            setTimeout(() => {
                document.querySelector(".page-loader").classList.add('close');
                setTimeout(() => this.isLoaded = true, 1550);
            }, 10);
        }
    }
</script>


<style>
    .page-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        z-index: 10000;
        opacity: 1;
        pointer-events: none;
    }
    .cube {
        width: 40px;
        height: 40px;
        margin-right:10px;
        transition: 0.2s;
    }
    .cube:nth-child(1) {
        background: #8CC271;
        animation: left 1s infinite;
    }
    .cube:nth-child(2) {
        background: #69BEEB;
    }
    .cube:nth-child(3) {
        background: #F5AA39;
    }
    .cube:nth-child(4) {
        background: #E9643B;
        animation: right 1s infinite .5s;
    }

    .close {
        animation: 3s close;
    }

    @keyframes close {
        40% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    @keyframes left {
        40% {
            transform: translateX(-60px);
        }
        50% {
            transform: translateX(0);
        }
    }

    @keyframes right {
        40% {
            transform: translateX(60px);
        }
        50% {
            transform: translateX(0);
        }
    }
</style>
