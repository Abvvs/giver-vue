<template>
    <Background :isDark="false">
      <TextWriter :text="finalText" :speed="80" :isDark="false"/>
    </Background>
  </template>
  
  <script>
  import Background from '../components/background.vue';
  import TextWriter from '../components/textWriter.vue';
  
  export default {
    name: 'Final',
    components: {
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