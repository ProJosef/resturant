<template>
  <header>
    <h1>About Us</h1>
  </header>
  <main class="main">
    <div class="image">
      <img src="../assets/about-1.jpg" width="250" height="250" />
      <img class="se" src="../assets/about-2.jpg" width="200" height="200" />
      <img class="th" src="../assets/about-3.jpg" width="200" height="200" />
      <img class="fo" src="../assets/about-4.jpg" width="250" height="250" />
    </div>
    <div class="about">
      <h3 class="main-title">About Us _____</h3>
      <h1 class="prime-title">
        Welcome to <font-awesome-icon icon="fa-solid fa-utensils" /> Restoran
      </h1>
      <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
      </p>
      <p>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <div>
        <div>
          <h1>15</h1>
          <div>
            <p>Years of</p>
            <h4>EXPERIENCE</h4>
          </div>
        </div>
        <div>
          <h1>50</h1>
          <div>
            <p>Popular</p>
            <h4>MASTER CHEFS</h4>
          </div>
        </div>
      </div>
      <button class="book">READ MORE</button>
    </div>
  </main>
  <h3 class="main-title">_____ Team Members _____</h3>
  <h1 class="prime-title">Our Master Chefs</h1>
  <div class="chefs">
    <div class="chef" v-for="chef in $store.state.chefs" :key="chef.name">
      <img :src="chef.image" width="200" />
      <h2>{{ chef.name }}</h2>
      <p>{{ chef.jobTitle }}</p>
    </div>
  </div>
</template>

<style>
.fa-utensils {
  color: #fea116;
}
.image {
  max-width: 550px;
  padding-inline: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
}
.th {
  margin-left: 50px;
}
.se {
  margin-top: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-block: 96px;
  text-align: left;
}
.about {
  padding-inline: 16px;
  max-width: 520px;
}
.about > p {
  margin-bottom: 24px;
  line-height: 1.6rem;
}
.about > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about > div > div {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.about > div h1 {
  color: #fea116;
  border-left: #fea116 solid 5px;
  font-size: 45px;
  padding-inline: 15px;
}
.chefs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 64px;
}
.chef > h2 {
  margin-block: 16px;
}
.chef img {
  border-radius: 50%;
}
.chef {
  margin: 24px;
}
</style>
