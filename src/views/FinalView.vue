<template>
    <Background :isDark="false">
      <LightDarkAnimation />
      <TextWriter :text="finalText" :speed="80" :isDark="false"/>
    </Background>
  </template>
  
  <script>
  import Background from '../components/background.vue';
  import TextWriter from '../components/textWriter.vue';
  import LightDarkAnimation from '../components/lightDarkAnimation.vue';
  
  export default {
    name: 'Final',
    components: {
      LightDarkAnimation,
      Background,
      TextWriter,
    },
    data() {
      return {
        finalText: 'Kael y Lira encontraron un equilibrio entre la luz y la oscuridad. Juntos, demostraron que incluso los demonios pueden amar...',
      };
    },
  };
  </script>