<template>
    <div>
        lalalal
      <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="restaurant.restaurant.featured_image"
                alt="Placeholder image"
                class="filter"
              />
            </figure>
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
              <b-button class="button is-dark"
                >Više informacija</b-button
              >
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: {
        id: null,
        name: ''
      }
    }
  },
   mounted() {
       if (this.$route.params.id) {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=50&radius=500&establishment_type=286/"+ this.$route.params.id,
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
   }
  },
}
</script>

