<template>
  <div class="">
    <section class="hero is-light is-medium">
      <!-- Hero head: will stick at the top -->
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
                <a class="navbar-item is-active"> Home </a>
                <a class="navbar-item"> Examples </a>
                <a class="navbar-item"> Documentation </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <section>
            <b-dropdown v-model="selectedOptions" multiple aria-role="list">
              <button class="button is-primary" type="button" slot="trigger">
                <span>Opcije rezervacije: </span>
                <b-icon icon="menu-down"></b-icon>
              </button>
              <div class="columns">
                <div class="column">
                  <h1 class="is-primary">Broj gostiju</h1>
                  <h1 class="is-primary">
                    <span class="material-icons"> people </span>
                  </h1>
                  <b-dropdown-item value="2" aria-role="listitem">
                    <span>2</span>
                  </b-dropdown-item>
                  <b-dropdown-item value="4" aria-role="listitem">
                    <span>4</span>
                  </b-dropdown-item>
                  <b-dropdown-item value="6" aria-role="listitem">
                    <span>6</span>
                  </b-dropdown-item>
                  <b-dropdown-item value="12" aria-role="listitem">
                    <span>12</span>
                  </b-dropdown-item>
                </div>
                <div class="column">
                  <h1 class="is-primary">Mjesto stola</h1>
                  <h1 class="is-primary">
                    <span class="material-icons"> push_pin </span>
                  </h1>
                  <b-dropdown-item value="placeWindow" aria-role="listitem">
                    <span>Kraj prozora</span>
                  </b-dropdown-item>
                  <b-dropdown-item value="placeInterion" aria-role="listitem">
                    <span>U unutrašnjosti</span>
                  </b-dropdown-item>
                </div>
                <div class="column">
                  <h1 class="is-primary">Vrijeme rezervacije</h1>
                  <b-datetimepicker
                    v-model="datetime"
                    inline
                    :timepicker="timepicker"
                    :min-datetime="minDatetime"
                    :max-datetime="maxDatetime"
                    :horizontal-time-picker="true"
                  ></b-datetimepicker>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <button class="button is-primary">
                    Sviđa mi se! Rezerviraj
                  </button>
                </div>
              </div>
            </b-dropdown>
          </section>
          <section>
            <b-button class="button is-primary" type="button" slot=""
              icon-left="qrcode-scan">
              Sjedim u restoranu, daj mi da naručim
            </b-button>
          </section>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    const min = new Date();
    min.setHours(9);
    const max = new Date();
    max.setHours(21);
    return {
      selectedOptions: [],
      datetime: new Date(),
      timepicker: {
        incrementMinutes: 15,
      },
      minDatetime: min,
      maxDatetime: max,
    };
  },
};
</script>
  

<style>
</style>
