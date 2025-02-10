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
            const tulipCount = 20; // Número de tulipanes
            for (let i = 0; i < tulipCount; i++) {
                const size = Math.random() * 50 + 30; // Tamaño aleatorio entre 30px y 80px
                const x = Math.random() * window.innerWidth; // Posición horizontal aleatoria
                const y = Math.random() * window.innerHeight; // Posición vertical aleatoria
                const duration = Math.random() * 4 + 3; // Duración de la animación entre 3s y 7s
                const delay = Math.random() * 2; // Retraso inicial aleatorio

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
    position: fixed; /* Cambiado a fixed para cubrir toda la pantalla */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 3; /* Asegúrate de que esté por encima del fondo pero debajo del texto */
}

.tulip {
    position: absolute;
    background: url('https://pngimg.com/uploads/tulip/tulip_PNG8986.png') no-repeat center center;
    background-size: contain;
    animation: float ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    50% {
        transform: translateY(-20px) translateX(20px);
    }
}
</style>