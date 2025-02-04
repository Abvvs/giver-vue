<template>
    <div class="light-particles">
      <div v-for="(particle, index) in particles" :key="index" class="particle" :style="particle.style"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LightParticles',
    data() {
      return {
        particles: [],
      };
    },
    created() {
      this.createParticles();
    },
    methods: {
      createParticles() {
        for (let i = 0; i < 30; i++) {
          this.particles.push({
            style: {
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              opacity: Math.random(),
            },
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .light-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .particle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: float linear infinite;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
  </style>