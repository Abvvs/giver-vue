<template>
  <div class="light-container">
    <div
      v-for="(light, index) in lights"
      :key="index"
      class="light"
      :style="light.style"
    ></div>
  </div>
</template>

<script>
export default {
  name: "LightParticles",
  data() {
    return {
      lights: [], // Array para almacenar las luces
    };
  },
  mounted() {
    this.createLights();
  },
  methods: {
    createLights() {
      const numberOfLights = 20; // Número de luces que deseas crear
      for (let i = 0; i < numberOfLights; i++) {
        const size = Math.random() * 200 + 50; // Tamaño aleatorio entre 50px y 150px
        const blur = Math.random() * 50 + 20; // Blur aleatorio entre 20px y 70px
        const opacity = Math.random() * 0.5 + 0.3; // Opacidad aleatoria entre 0.3 y 0.8
        const duration = Math.random() * 3 + 2; // Duración de la animación entre 2s y 5s

        this.lights.push({
          style: {
            top: `${Math.random() * 100}%`, // Posición vertical aleatoria
            left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
            width: `${size}px`,
            height: `${size}px`,
            opacity: "0", // Comienza con opacidad 0
            filter: `blur(${blur}px)`, 
            animationDuration: `${duration}s`, // Duración de la animación
          },
        });
      }

      // Iniciar la animación después de un pequeño delay
      setTimeout(() => {
        this.lights.forEach((light) => {
          light.style.opacity = opacity; // Aplicar opacidad final
          light.style.transition = `all ${duration}s ease-out`; // Transición suave
        });
      }, 100);
    },
  },
};
</script>

<style scoped>
.light-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.light {
  position: absolute;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: grow ease-in-out infinite;
}

@keyframes grow {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
</style>
