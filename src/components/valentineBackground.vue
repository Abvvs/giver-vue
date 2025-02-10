<template>
    <div class="valentine-background">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ValentineBackground',
};
</script>

<style scoped>
.valentine-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #ffffff, #b85252);
    z-index: -1; /* Asegúrate de que esté detrás de todo */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
</style>