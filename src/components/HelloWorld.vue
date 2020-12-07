<template v-slot="props">
  <!-- <div class="">
    <section class="hero is-light is-medium"> -->
  <!-- Hero head: will stick at the top -->
  <!-- <div class="hero-head">
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
      </div> -->
  <!-- Hero content: will be in the middle -->

  <!-- <section>
            <b-button
              class="button is-dark"
              type="button"
              slot=""
              icon-left="qrcode-scan"
              @click="isQRModalActive = true"
            >
              Sjedim u collapseu, daj mi da naručim
            </b-button>
          </section> -->

  <!-- restaurants -->
  <section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <b-field>
          <b-input
            placeholder="Search..."
            type="search"
            icon="magnify"
            icon-clickable
            @icon-click="searchIconClick"
            icon-right="close-circle"
            v-model="search"
            autocomplete="off"
          >
          </b-input>
        </b-field>
      </div>
      <div
        class="column is-3"
        v-for="restaurant in filtrirano"
        v-bind:key="restaurant.restaurant.id"
        
      >
        <div class="card" >
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="restaurant.restaurant.featured_image"
                alt="Placeholder image"
                class="filter"
              />
            </figure>
            <div id="overlay"></div>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    :src="restaurant.restaurant.featured_image"
                    alt="Placeholder image"
                    class="filter"
                  />   
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ restaurant.restaurant.name }}</p>
              </div>
            </div>

            <div class="content">
              <p>{{ restaurant.restaurant.cuisines }}</p>
              <b-button  class="button is-dark"  @click="$router.push('/view/' + restaurant.restaurant.id)"
                >Više informacija</b-button
              >
            </div>
          </div>
        </div>
        <!-- <div v-else></div> -->
      </div>
    </div>
    <b-modal 
        :active="$route.path.includes('view')" 
        aria-role="dialog" 
        aria-modal
        :on-cancel="handleCancel"
    >
      <template>
        <router-view  />
      </template>
    </b-modal>
    <!-- <b-modal
              v-model="isQRModalActive"
              has-modal-card
              full-screen
              :can-cancel="false"
            >
            <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Opcije rezervacije</p>
                  <button
                    class="delete"
                    aria-label="close"
                    @click="isQRModalActive = false"
                  ></button>
                </header>
              <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
              </div>
            </b-modal> -->
    <!-- Modal -->
    <!-- <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      full-screen
      :can-cancel="false"
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Opcije rezervacije</p>
          <button
            class="delete"
            aria-label="close"
            @click="isComponentModalActive = false"
          ></button>
        </header>

        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              <figure class="image is-1by1">
                <img src="../assets/img/logo.jpg" alt="Placeholder image" />
              </figure>

              <h4>Ime collapsea</h4>
              <p>adresa</p>
              <p>kontakt broj</p>
            </div>

            <div class="column">
              <h1 class="is-dark">Broj gostiju</h1>
              <h1 class="is-dark">
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
              <h1 class="is-dark">Mjesto stola</h1>
              <h1 class="is-dark">
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
              <h1 class="is-dark">Vrijeme rezervacije</h1>
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
        </section>
        <footer class="modal-card-foot">
          <div class="container">
            <div class="columns">
              <div class="column">
                <button class="button is-dark">Sviđa mi se! Rezerviraj</button>
              </div>
              <div class="column">
                <button
                  outlined
                  class="button is-dark close-modal"
                  type="button"
                  @click="isComponentModalActive = false"
                >
                  Zatvori
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </b-modal> -->
    <!-- Modal end -->

    <!-- <b-dropdown v-model="selectedOptions" multiple aria-role="list">
              <button class="button is-dark" type="button" slot="trigger">
                <span>Opcije rezervacije: </span>
                <b-icon icon="menu-down"></b-icon>
              </button>
              <div class="columns">
                <div class="column">
                  <h1 class="is-dark">Broj gostiju</h1>
                  <h1 class="is-dark">
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
                  <h1 class="is-dark">Mjesto stola</h1>
                  <h1 class="is-dark">
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
                  <h1 class="is-dark">Vrijeme rezervacije</h1>
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
                  <button class="button is-dark">
                    Sviđa mi se! Rezerviraj
                  </button>
                </div>
              </div>
            </b-dropdown> -->
  </section>
  <!-- restaurants end-->
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)
export default {
  name: "HelloWorld",
  mounted() {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=50&radius=500&establishment_type=286",
      {
        method: "GET",
        headers: {
          "user-key": "2aba10d52b01e55bbde1d49f29ce26c7",
          host:
            "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=50&radius=500&establishment_type=286",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (data) =>
          (this.restaurants = data.restaurants.filter(
            (restaurant) => restaurant.restaurant.featured_image != ""
          ))
      );
  },
  methods:{
    handleCancel() {
      this.$router.push('/')
    },
    handleUpdate(restaurant) {
      if (restaurant.restaurant.id) {
        this.data.find((t) => t.id === restaurant.restaurant.id).name = restaurant.restaurant.name
      } 
      this.$router.push('/')
    },

  },
  computed: {
    filtrirano() {
      return this.restaurants.filter((restaurant) => {
        return restaurant.restaurant.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  data() {
    const min = new Date();
    min.setHours(9);
    const max = new Date();
    max.setHours(21);
    return {
      modal: true,
      value: 1,
      // selectedOptions: [],
      // datetime: new Date(),
      // timepicker: {
      //   incrementMinutes: 15,
      // },
      // minDatetime: min,
      // maxDatetime: max,
      // isComponentModalActive: false,
      search: "",
      restaurants: [],
      
    };
  },
};
</script>
  

<style>
/* .filter {
  filter: sepia(100%);
} */
.column .is-3:empty {
  display: none;
}
</style>
