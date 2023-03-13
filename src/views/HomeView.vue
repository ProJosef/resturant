<template>
  <div class="container">
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
  <article>
    <h3 class="main-title">_____ Our Services _____</h3>
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
  </article>
  <article>
    <h3 class="main-title">_____ Team Members _____</h3>
    <div class="chefs">
      <div class="chef" v-for="chef in $store.state.chefs" :key="chef.name">
        <img :src="chef.image" width="200" />
        <h2>{{ chef.name }}</h2>
        <p>{{ chef.jobTitle }}</p>
      </div>
    </div>
  </article>
  <article>
    <h3 class="main-title">_____ Food Menu _____</h3>
    <div class="foods">
      <div
        v-for="food in $store.state.foods.slice(0, 4)"
        :key="food.name"
        class="food"
      >
        <img :src="food.image" />
        <div>
          <div>
            <h3>{{ food.name }}</h3>
            <h3 class="price">{{ food.price }} $</h3>
          </div>
          <p>{{ food.descrption }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

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
  line-height: 1.6rem;
}
.book {
  padding: 16px 32px;
  border-radius: 5px;
  color: white;
  background: #fea116;
  font-weight: 600;
  cursor: pointer;
  border: none;
}
article h3 {
  margin-bottom: 64px;
}
</style>
