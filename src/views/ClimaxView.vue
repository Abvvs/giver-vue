<template>
  <Background :isDark="false">
    <HeartFlame />
    <TextWriter :text="climaxText" :speed="80" :isDark="false"/>
  </Background>
</template>

<script>
import Background from "../components/background.vue";
import TextWriter from "../components/textWriter.vue";
import HeartFlame from "../components/heartFlame.vue";

export default {
  name: "Climax",
  components: {
    Background,
    TextWriter,
    HeartFlame,
  },
  data() {
    return {
      climaxText:
        "En un momento de claridad, el corazón de Kael latió con fuerza. Las llamas de su ser se transformaron en símbolo de su redención...",
    };
  },
};
</script>
