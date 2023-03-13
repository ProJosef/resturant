<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <h1 class="title">
        <font-awesome-icon icon="fa-solid fa-utensils" /> Resturan
      </h1>
    </router-link>
    <div class="navbar title" @click="show">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div ref="n" class="section">
      <router-link :to="{ name: 'home' }">HOME</router-link>
      <router-link :to="{ name: 'about' }">ABOUT</router-link>
      <router-link :to="{ name: 'service' }">SERVICE</router-link>
      <router-link :to="{ name: 'menu' }">MENU</router-link>
      <router-link :to="{ name: 'contact' }">CONTACT</router-link>
      <button class="book">BOOK A TABLE</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    show() {
      this.$refs.n.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.title {
  color: #fea116;
  font-size: 32px;
  margin-block: 16px;
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
}
.section a {
  font-weight: bold;
  color: wheat;
  padding: 16px;
  border-radius: 4px;
  transition: 0.5s;
}
.section a:hover {
  background: #444;
}
.navbar {
  display: none;
  position: absolute;
  top: 4px;
  right: 16px;
  cursor: pointer;
}
nav a.router-link-exact-active {
  color: #fea116;
}
nav button {
  padding: 12px 24px;
  margin-inline: 16px;
}
@media only screen and (max-width: 1000px) {
  nav {
    align-items: flex-start;
    flex-direction: column;
    padding-inline: 16px;
  }
  .section {
    flex-direction: column;
    align-items: center;
    display: none;
    width: 100%;
  }
  .navbar {
    display: block;
  }
  .section a {
    width: 100%;
    padding-block: 16px;
  }
  .section.active {
    display: flex;
  }
  nav button {
    margin-block: 16px;
  }
}
</style>
