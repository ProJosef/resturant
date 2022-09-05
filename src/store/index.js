import { createStore } from "vuex";

export default createStore({
  state: {
    services: [
      {
        icon: "fa-solid fa-user-tie",
        title: "Master Chefs",
        descrption:
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      },
      {
        icon: "fa-solid fa-utensils",
        title: "Quality Food",
        descrption:
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      },
      {
        icon: "fa-solid fa-cart-plus",
        title: "Online Order",
        descrption:
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      },
      {
        icon: "fa-solid fa-door-open",
        title: "24/7 Service",
        descrption:
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      },
    ],
    foods: [
      {
        image: require("../assets/menu-1.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-2.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-3.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-4.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-5.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-6.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-7.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
      {
        image: require("../assets/menu-8.jpg"),
        price: 115,
        name: "Chicken Burger",
        descrption: "Ipsum ipsum clita erat amet dolor justo diam",
      },
    ],
    chefs: [
      {
        image: require("../assets/team-1.jpg"),
        name: "Full Name",
        jobTitle: "Designation",
      },
      {
        image: require("../assets/team-2.jpg"),
        name: "Full Name",
        jobTitle: "Designation",
      },
      {
        image: require("../assets/team-3.jpg"),
        name: "Full Name",
        jobTitle: "Designation",
      },
      {
        image: require("../assets/team-4.jpg"),
        name: "Full Name",
        jobTitle: "Designation",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
