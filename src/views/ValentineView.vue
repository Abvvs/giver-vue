<template>
  <ValentineBackground>
    <FlowerBouquet />
    <TextWriter :text="valentineText" :speed="80" :isDark="false"/>
  </ValentineBackground>
</template>

<script>
import FlowerBouquet from "../components/flowerBouquet.vue";
import ValentineBackground from "../components/valentineBackground.vue";
import TextWriter from "../components/textWriter.vue";

export default {
  name: "Valentine",
  components: {
    ValentineBackground,
    TextWriter,
    FlowerBouquet
  },
  data() {
    return {
      valentineText:
        "Feliz San Valentín",
    };
  },
};
</script>
