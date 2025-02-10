<template>
    <div class="flames">
      <div v-for="(flame, index) in flames" :key="index" class="flame" :style="flame.style"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlamesAnimation',
    data() {
      return {
        flames: [],
      };
    },
    created() {
      this.createFlames();
    },
    methods: {
      createFlames() {
        for (let i = 0; i < 10; i++) {
          this.flames.push({
            style: {
              left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
              animationDuration: `${Math.random() * 3 + 2}s`, // Duración aleatoria
              animationDelay: `${Math.random() * 2}s`, // Retardo aleatorio
            },
          });
        }
      },
    },
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
    width: 150px;
    height: 150px;
    background: linear-gradient(-45deg, red, orange);
    border-radius: 150px 150px 0px 150px;
    transform: rotate(-135deg);
    animation: flame 0.1s infinite, riseAndFade linear infinite;
    filter: blur(10px);
    position: absolute;
    box-shadow: 17px 20px 90px #700;
    border: 45px solid black;
    border-left-width: 25px;
    border-top-width: 25px;
    bottom: 0;
  }
  
  .flame::after,
  .flame::before {
    content: '';
    width: 100px;
    height: 100px;
    display: block;
    position: absolute;
    background: linear-gradient(-45deg, red, orange);
    animation: flame 0.2s infinite;
    transform: scale(0.8) rotate(20deg);
    border-radius: 100px 100px 0px 100px;
    top: 20px;
  }
  
  .flame::before {
    top: 0;
    animation-duration: 0.09s;
    transform: scale(0.9) rotate(-15deg) translate(10px, 0px);
  }
  
  @keyframes flame {
    0% {
      height: 150px;
      width: 150px;
    }
    50% {
      height: 140px;
      width: 140px;
    }
    100% {
      height: 150px;
      width: 150px;
    }
  }
  
  @keyframes riseAndFade {
    0% {
      transform: translateY(0) rotate(-135deg) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-50vh) rotate(-135deg) scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100vh) rotate(-135deg) scale(0.5);
      opacity: 0;
    }
  }
  </style>