<template>
  <header>
    <h1>Food Menu</h1>
  </header>
  <main>
    <h3 class="main-title">_____ Food Menu _____</h3>
    <h1 class="prime-title">Most Popular Items</h1>
    <div class="foods">
      <div v-for="food in $store.state.foods" :key="food.name" class="food">
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
  </main>
</template>

<style>
.foods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 32px 96px;
}
.food {
  text-align: left;
  max-width: 500px;
  display: flex;
  align-items: center;
  margin: 16px;
  padding: 16px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.food img {
  width: 100px;
  height: 100px;
}
.food>div {
  margin: 16px ;
}
.food div div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #fea116;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.price {
  color: #fea116;
}
</style>