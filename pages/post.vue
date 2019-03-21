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
            <b-input value="johnsilver"></b-input>
      </b-field>
      <b-field horizontal label='Price'>
        <b-field>
          <p class="control">
              <span class="button is-static">$</span>
          </p>
          <b-input 
            type="number" 
            placeholder="0.00"
            v-bind:value="price" 
            expanded></b-input>
        </b-field>
      </b-field>
      <b-field horizontal label="Message">    
        <b-input 
        type="textarea"
        v-bind:value="message"></b-input>
      </b-field>
      <b-field horizontal>
            <p class="control">
                <button class="button is-primary">
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
      price: ''
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
