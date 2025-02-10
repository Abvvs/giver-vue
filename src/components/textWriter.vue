<template>
  <div class="text-writer" :class="{ 'dark-text': isDark }">
    <span class="text">{{ displayedText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
export default {
  name: "TextWriter",
  props: {
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 100,
    },
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      displayedText: "",
      currentIndex: 0,
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.text.length) {
        this.displayedText += this.text.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(this.typeText, this.speed);
      }
    },
  },
};
</script>

<style scoped>
.text-writer {
  font-family: "Courier New", monospace;
  font-size: 1.5rem;
  color: #fff;
  /* Color por defecto (para fondos oscuros) */
  text-align: center;
  margin-top: 20vh;
  z-index: 9999;
  position: fixed;
}

.text-writer.dark-text {
  color: #000;
  /* Color para fondos claros */
}
</style>
