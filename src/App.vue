<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Introduction from './views/IntroductionView.vue'
import NavigationArrows from './components/navigationArrows.vue';
</script>

<template>
  <div id="app">
    <Introduction />
    <NavigationArrows />
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}
</style>
