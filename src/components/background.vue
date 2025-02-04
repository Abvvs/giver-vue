<template>
    <div class="background">
        <div class="overlay"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Background',
};
</script>

<style scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #1a1a1a, #000);
    z-index: -1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
</style>