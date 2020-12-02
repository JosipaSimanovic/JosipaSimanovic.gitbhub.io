<template>
  <div id="app">
    <section class="hero is-light is-medium">
      <Navigation />
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view />
        </div>
      </div>
      <Bottom/>
    </section>
  </div>
</template>
<script>

import Navigation from "@/components/navigation.vue";

import Bottom from "@/components/bottom.vue";
// import selectMultiple from "./components/selectMultiple.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Bottom
    // selectMultiple,
  },
};
</script>


