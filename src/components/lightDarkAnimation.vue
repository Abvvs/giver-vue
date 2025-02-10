<template>
  <div class="light-dark-animation">
    <div class="light"></div>
    <div class="dark"></div>
  </div>
</template>

<script>
export default {
  name: "LightDarkAnimation",
};
</script>

<style scoped>
.light-dark-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 3; /* Asegúrate de que esté por encima del fondo pero debajo del texto */
}

.light,
.dark {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.light {
  background: radial-gradient(circle, #ffeb3b, #ffffff);
  box-shadow: 0 0 50px 20px rgba(255, 255, 255, 0.5);
  animation-name: moveLight;
}

.dark {
  background: radial-gradient(circle, #b53f3f, #7e1a1a);
  box-shadow: 0 0 50px 20px rgba(209, 82, 82, 0.5);
  animation-name: moveDark;
}

@keyframes moveLight {
  0%,
  100% {
    transform: translate(-150px, -150px);
  }
  50% {
    transform: translate(0, 0);
  }
}

@keyframes moveDark {
  0%,
  100% {
    transform: translate(150px, 150px);
  }
  50% {
    transform: translate(0, 0);
  }
}
</style>
