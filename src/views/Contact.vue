<template>
  <header>
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
</template>

<style>
.contact .fa-envelope {
  color: #fea116;
}
.contact-us {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-inline: 64px;
  margin-bottom: 96px;
}
.contact {
  text-align: left;
  max-width: 300px;
  margin-block: 16px;
}
.contact h3 {
  margin-block: 8px;
}
</style>
