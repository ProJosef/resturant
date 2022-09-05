<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <div class="title">
        <h1><font-awesome-icon icon="fa-solid fa-utensils" /> Resturan</h1>
      </div>
    </router-link>
    <div class="navbar title"  @click="show">
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
        this.$refs.n.classList.toggle("active")
      }
  }
};
</script>

<style scoped>
.title {
  color: #fea116;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  background: black;
}
.section a {
  font-weight: bold;
  color: wheat;
  padding: 1.3rem 15px;
  transition: 0.5s;
}
.section a:hover {
  background: #444;
}
.navbar {
  display: none;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
}
nav a.router-link-exact-active {
  color: #fea116;
}
nav button {
  padding: 5px 20px;
  width: fit-content;
}
@media only screen and (max-width: 900px) {
  nav {
    align-items: flex-start;
    flex-direction: column;
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
    background: black;
    width: 100%;
    padding-block: .8rem;
  }
  .section.active {
    display: flex;
  }
}
</style>
