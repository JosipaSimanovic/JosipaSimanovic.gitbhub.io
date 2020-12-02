<template>
  <div id="app">
    <section class="hero is-light is-medium">
      <Navigation />
      <div class="hero-body">
        <div class="container has-text-centered">
          <Order />
          <HelloWorld />
          <!-- restaurants -->
        </div>
      </div>
      <Bottom/>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from "./components/navigation.vue";
import Order from "./components/order.vue";
import Bottom from "./components/bottom.vue";
// import selectMultiple from "./components/selectMultiple.vue";

export default {
  name: "App",
  components: {
    Navigation,
    HelloWorld,
    Order,
    Bottom
    // selectMultiple,
  },
};
</script>


