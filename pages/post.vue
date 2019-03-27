<style lang='scss'>
  .post {
    
    .form {
      padding: 2rem;
    }
  }
</style>

<template>
  <section class="section post">
    <h2>Post a Gift Idea</h2>
    <div class="form">
      <b-field horizontal label="Link to Gift"
            v-bind:type="{ 'is-success' : validUrl }"
            v-bind:message="validUrlMessage">
            <b-input v-model='giftUrl'></b-input>
      </b-field>
      <b-field horizontal label='Tags'>
        <b-taginput
            v-model="tags"
            icon="label"
            placeholder="Add a tag">
        </b-taginput>
        <b-field>
          <p class="control">
              <span class="button is-static">$</span>
          </p>
          <b-input 
            type="number" 
            placeholder="0.00"
            v-model="price" 
            expanded></b-input>
        </b-field>
      </b-field>
      <b-field horizontal label="Message">    
        <b-input 
        type="textarea"
        v-model="message"></b-input>
      </b-field>
      <b-field horizontal>
        <b-switch v-model="isPublic"
            true-value="Public"
            false-value="Private">
            {{ isPublic }}
        </b-switch>
      </b-field>
      <b-field horizontal>
        <p class="control">
            <button 
              class="button is-primary"
              v-on:click='submit()'>
              Post Gift
            </button>
        </p>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  components: {
    
  },
  data () {
    return {
      message: '',
      price: '',
      tags: [],
      isPublic: 'Public',
      giftUrl: ''
    }
  },
  methods: {
    submit: function () {
      let giftRequest = {
        giftUrl: this.giftUrl,
        message: this.message,
        price: this.price,
        tags: this.tags,
        isPublic: this.isPublic
      }
      console.log(giftRequest)
    }
  },
  computed: {
    validUrl: function () {
      // TODO: verify url with regex
      return true;
    },
    validUrlMessage: function () {
      // TODO: handle invalid url
      if (this.validUrl) {
        return 'Valid Gift Url'
      }
    }
  }
}
</script>
