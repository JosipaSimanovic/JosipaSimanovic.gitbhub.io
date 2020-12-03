<template>
<div>
    <b-button
        class="button is-dark"
        icon-left="qrcode-scan"
        @click="isqrModalActive = true"
    >Želim naručiti</b-button>
    <b-modal
              v-model="isqrModalActive"
              has-modal-card
              full-screen
              :can-cancel="false"
            >
            
               <div class="columns">
                    <div class="column"></div>
                    <div class="column qr">
              <qrcode-stream ></qrcode-stream>
              <!-- @decode="onDecode" @init="onInit" -->
                    </div>
                    <div class="column"></div>
               </div>
              
           <button
                          outlined
                          class="button is-dark close-modal"
                          type="button"
                          @click="isqrModalActive = false"
                        >
                          Zatvori
                        </button>
    </b-modal>

</div>
</template>
<script>
export default {
  data() {
    return {
      
      isqrModalActive: false,
    };
  },
  
};
</script>
<style>
    .qr{
        height: 70vh;
    }
</style>