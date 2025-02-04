<template>
    <div class="navigation-arrows">
        <button @click="goBack" :disabled="isFirstPage" class="arrow left">←</button>
        <button @click="goNext" :disabled="isLastPage" class="arrow right">→</button>
    </div>
</template>
<script>
export default {
  name: 'NavigationArrows',
  computed: {
    isFirstPage() {
      return this.$route.path === '/';
    },
    isLastPage() {
      return this.$route.path === '/final';
    },
  },
  methods: {
    goBack() {
      const routes = ['/', '/encounter', '/conflict', '/climax', '/final'];
      const currentIndex = routes.indexOf(this.$route.path);
      if (currentIndex > 0) {
        this.$router.push(routes[currentIndex - 1]);
      }
    },
    goNext() {
      const routes = ['/', '/encounter', '/conflict', '/climax', '/final'];
      const currentIndex = routes.indexOf(this.$route.path);
      if (currentIndex < routes.length - 1) {
        this.$router.push(routes[currentIndex + 1]);
      }
    },
  },
};
</script>

<style scoped>
.navigation-arrows {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}

.arrow {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.4);
}

.arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>