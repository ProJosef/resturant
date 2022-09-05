<template>
  <!-- <HomeView />
  <service /> -->
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import service from "./views/service.vue";

export default {
  components: { HomeView , service},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  font-family:sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
