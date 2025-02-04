<template>
    <div class="flames">
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
    </div>
</template>

<script>
export default {
    name: 'FlamesAnimation',
};
</script>

<style scoped>
.flames {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.flame {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255, 81, 0, 0.8), transparent);
    animation: moveFlames 5s infinite ease-in-out;
}

.flame:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
}

.flame:nth-child(2) {
    left: 50%;
    animation-delay: 2s;
}

.flame:nth-child(3) {
    left: 80%;
    animation-delay: 4s;
}

@keyframes moveFlames {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0.8;
    }

    50% {
        transform: translateY(-50vh) scale(0.5);
        opacity: 0.5;
    }

    100% {
        transform: translateY(-100vh) scale(0);
        opacity: 0;
    }
}
</style>