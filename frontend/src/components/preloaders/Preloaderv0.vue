<template>
    <div class="page-loader2" v-if="!isLoaded">
        <div class="cube2"></div>
        <div class="cube2"></div>
        <div class="cube2"></div>
        <div class="cube2"></div>
    </div>
</template>

<script>
    export default {
        name: 'preloaderv0',
        data() {
            return {
                isLoaded: false
            }
        },
        mounted() {
            setTimeout(() => {
                document.querySelector(".page-loader2").classList.add('close');
                setTimeout(() => this.isLoaded = true, 1550);
            }, 10);
        }
    }
</script>


<style>
    .page-loader2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 10000;
        opacity: 1;
        pointer-events: none;
    }
    .cube2 {
        width: 40px;
        height: 40px;
        margin-right:10px;
        transition: 0.2s;
    }
    .cube2:nth-child(1) {
        background: #8CC271;
        animation: left 1s infinite;
    }
    .cube2:nth-child(2) {
        background: #69BEEB;
    }
    .cube2:nth-child(3) {
        background: #F5AA39;
    }
    .cube2:nth-child(4) {
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
