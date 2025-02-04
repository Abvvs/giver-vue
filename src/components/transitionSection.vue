<template>
    <div class="transition-section">
      <div class="dark-side"></div>
      <div class="light-side"></div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransitionSection',
  };
  </script>
  
  <style scoped>
  .transition-section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .dark-side,
  .light-side {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
  }
  
  .dark-side {
    left: 0;
    background: linear-gradient(to right, #1a1a1a, #444); /* Degradado oscuro */
  }
  
  .light-side {
    right: 0;
    background: linear-gradient(to left, #f0f0f0, #bbb); /* Degradado claro */
  }
  
  /* Degradado suave en el centro */
  .transition-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 49%;
    width: 2%;
    height: 100%;
    background: linear-gradient(to right, #444, #bbb); /* Degradado entre oscuro y claro */
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  </style>