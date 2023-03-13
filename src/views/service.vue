<template>
  <header>
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
</template>

<style>
.service div {
  color: #fea116;
  font-size: 48px;
  margin-bottom: 16px;
}
header {
  background: url("../assets/main.jpg");
  height: 64vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
header > h1 {
  font-size: 4rem;
}
.prime-title {
  margin-bottom: 48px;
  margin-top: 24px;
}
.main-title {
  font-family: "Pacifico", cursive;
  color: #fea116;
  margin-top: 96px;
}
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 96px;
}
.service {
  text-align: left;
  max-width: 256px;
  margin: 16px;
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
