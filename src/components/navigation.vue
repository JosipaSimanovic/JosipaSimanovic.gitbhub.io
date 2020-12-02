<template>
    <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <router-link to="/" class="navbar-item is-active"> Home </router-link>
                 <router-link to="/About" class="navbar-item "> About </router-link>
                 
              </div>
            </div>
          </div>
        </nav>
      </div>
</template>
<script>
export default {
    name: "Navigation",
}
</script>