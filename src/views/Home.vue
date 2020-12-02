<template>
  <div class=" home">
        <div class="container has-text-centered">
          <Order />
          <HelloWorld />
         
        </div>
      </div>
</template>

<script>
// @ is an alias to /src
 import HelloWorld from '@/components/HelloWorld.vue';
  import Order from '@/components/order.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Order
  }
}
</script>
