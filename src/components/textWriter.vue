<template>
    <div class="text-writer">
        <span class="text">{{ displayedText }}</span>
        <span class="cursor">|</span>
    </div>
</template>

<script>
export default {
    name: 'TextWriter',
    props: {
        text: {
            type: String,
            required: true,
        },
        speed: {
            type: Number,
            default: 100, // Velocidad en milisegundos
        },
    },
    data() {
        return {
            displayedText: '',
            currentIndex: 0,
        };
    },
    mounted() {
        this.typeText();
    },
    methods: {
        typeText() {
            if (this.currentIndex < this.text.length) {
                this.displayedText += this.text.charAt(this.currentIndex);
                this.currentIndex++;
                setTimeout(this.typeText, this.speed);
            }
        },
    },
};
</script>

<style scoped>
.text-writer {
    font-family: 'Courier New', monospace;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin-top: 20vh;
}

.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>