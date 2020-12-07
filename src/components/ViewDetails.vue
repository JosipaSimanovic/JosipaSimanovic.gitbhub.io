<template>
  <div>
    <b-loading :is-full-page="true" :active="true" v-if="isLoading"></b-loading>
    <div class="card" v-else>
      <div class="card-image">
        <figure class="image ">
          <img
            :src="restaurant.featured_image"
            alt="Placeholder image"
            class="filter"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          
          <div class="media-content">
            <p class="title is-4">{{ restaurant.name }}</p>
          </div>
        </div>

        <div class="content">
          <table>
            <tr>
              <td>Cuisines</td>
              <td>{{ restaurant.cuisines }}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{{ restaurant.location.address }}</td>
            </tr>
            <tr>
              <td>Neighbourhood</td>
              <td>{{ restaurant.location.locality }}</td>
            </tr>
            <tr>
              <td>Average cost for 2 </td>
              <td>{{ restaurant.average_cost_for_two }}{{ restaurant.currency }} </td>
            </tr>
            <tr>
              <td>User rating</td>
              <td>{{ restaurant.user_rating.aggregate_rating }} {{ restaurant.user_rating.rating_text }}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td><a :href="`tel:restaurant.phone_numbers`">{{ restaurant.phone_numbers }}</a></td>
            </tr>
          </table>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurant: [],
      isLoading: true
    }
  },

  mounted() {
    if (this.$route.params.id) {
      fetch(
        `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.$route.params.id}`,
        {
          method: 'GET',
          headers: {
            'user-key': '2aba10d52b01e55bbde1d49f29ce26c7'
          }
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.isLoading = false
          this.restaurant = data
        })
    }
  }
}
</script>
<style>
  .filter{
    max-height: 400px;
  }
</style>
