<template>
  <header>
    <Navbar />
    <h1>Contact Us</h1>
  </header>
  <main>
    <h3 class="main-title">_____ Contact Us _____</h3>
    <h1 class="prime-title">Contact For Any Query</h1>
    <div class="contact-us">
      <div class="contact">
        <h3 class="main-title">Booking _____</h3>
        <p><font-awesome-icon icon="fa-solid fa-envelope" /> book@example.com</p>
      </div>
      <div class="contact">
        <h3 class="main-title">General _____</h3>
        <p><font-awesome-icon icon="fa-solid fa-envelope" /> info@example.com</p>
      </div>
      <div class="contact">
        <h3 class="main-title">Technical _____</h3>
        <p><font-awesome-icon icon="fa-solid fa-envelope" /> tech@example.com</p>
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
.contact .fa-envelope {
  color: #fea116;
}
.contact-us {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-inline: 60px;
  margin-bottom: 6rem;
}
.contact {
  text-align: left;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.contact h3 {
  margin-block: 10px;
}
</style>
