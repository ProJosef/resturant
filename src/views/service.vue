<template>
  <header>
    <Navbar />
    <h1>Service</h1>
  </header>
  <main>
    <h3 class="main-title">_____ Our Services _____</h3>
    <h1 class="prime-title">Explore Our Services</h1>
    <div class="services">
      <div
        v-for="service in $store.state.services"
        :key="service.title"
        class="service"
      >
        <div><font-awesome-icon :icon="service.icon" /></div>
        <h4>
          {{ service.title }}
        </h4>
        <p>{{ service.descrption }}</p>
      </div>
    </div>
    <div class="services">
      <div
        v-for="service in $store.state.services"
        :key="service.title"
        class="service"
      >
        <div><font-awesome-icon :icon="service.icon" /></div>
        <h4>{{ service.title }}</h4>
        <p>{{ service.descrption }}</p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
.service div {
  color: #fea116;
  font-size: 50px;
  margin-bottom: 15px;
}
header {
  background: url("../assets/main.jpg");
  height: 60vh;
  color: white;
  padding-top: 150px;
}
header > h1 {
  font-size: 4rem;
}
.prime-title {
  margin-bottom: 40px;
  margin-top: 20px;
}
.main-title {
  font-family: "Pacifico", cursive;
  color: #fea116;
  margin-top: 70px;
}
.services {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 60px;
  margin-bottom: 100px;
}
.service {
  text-align: left;
  max-width: 200px;
  margin: 10px;
  padding: 30px 30px 40px 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.service:hover {
  background: #fea116;
  color: white;
}
.service:hover div {
  color: white;
}
.service p {
  margin-top: 20px;
}
</style>
