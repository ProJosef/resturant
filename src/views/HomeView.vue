<template>
  <div class="container">
    <Navbar />
    <div class="home">
      <h1>Enjoy Our Delicious Meal</h1>
      <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <button class="book">BOOK A TABLE</button>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navbar, Footer },
  name: "HomeView",
};
</script>
<style>
.container {
  background: url("../assets/main.jpg");
  min-height: 100vh;
  color: white;
  padding-top: 10rem;
}
.home {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10%;
  max-width: 500px;
  text-align: left;
}
.home h1 {
  font-size: 4rem;
  margin: 0;
}
.home p {
  margin-block: 5%;
  line-height: 1.5rem;
}
.book {
  padding: 15px 45px;
  padding-bottom: 30px;
  height: 30px;
  border-radius: 6px;
  color: white;
  background: #fea116;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

</style>