<script setup>
import Introduction from './views/IntroductionView.vue'
import NavigationArrows from './components/navigationArrows.vue';
</script>

<template>
  <div id="app">
    <Introduction />
    <router-view></router-view>
    <NavigationArrows />
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}
</style>
