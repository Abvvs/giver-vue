<template>
    <div class="flower-bouquet">
        <div class="tulip" v-for="(tulip, index) in tulips" :key="index" :style="tulip.style"></div>
    </div>
</template>

<script>
export default {
    name: 'FlowerBouquet',
    data() {
        return {
            tulips: [],
        };
    },
    mounted() {
        this.createTulips();
    },
    methods: {
        createTulips() {
            const tulipCount = 10; // Reducir el número de tulipanes para móviles
            for (let i = 0; i < tulipCount; i++) {
                const size = Math.random() * 40 + 20; // Tamaño más pequeño
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const duration = Math.random() * 4 + 3;
                const delay = Math.random() * 2;

                this.tulips.push({
                    style: {
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${x}px`,
                        top: `${y}px`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                    },
                });
            }
        },
    },
};
</script>

<style scoped>
.flower-bouquet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    pointer-events: none; /* Evita que las flores interfieran con interacciones */
}

.tulip {
    position: absolute;
    background: url('https://pngimg.com/uploads/tulip/tulip_PNG8986.png') no-repeat center center;
    background-size: contain;
    animation: float ease-in-out infinite;
    will-change: transform; /* Optimiza la animación */
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-10px) translateX(10px); /* Movimiento más suave */
    }
}

/* Estilos para móviles */
@media (max-width: 768px) {
    .tulip {
        animation-duration: 6s; /* Animación más lenta para móviles */
    }
}
</style>