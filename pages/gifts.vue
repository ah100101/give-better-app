<style lang='scss'>
  .gifts {

    .post-card {
      margin: 1rem 0;
    }

  }
</style>

<template>
  <section class="section gifts">
    <h2>My Gifts</h2>

    <no-ssr>
    <card />
    <card />
    <card />
    </no-ssr>

  </section>
</template>

<script>
import card from '~/components/Card.vue'
import firebaseMixin from '~/mixins/firebaseMixin.js'

export default {
  name: 'Gifts',
  mixins: [firebaseMixin],
  components: {
    card
  },
  data () {
    return {
      // TODO: get actual user
      user: '123',
    }
  },
  mounted: function () {

  },
  methods: {

  },
  computed: {

  }
}
</script>
