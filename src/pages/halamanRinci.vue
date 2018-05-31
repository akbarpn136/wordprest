<template>
  <q-page>
    <q-card square flat>
      <q-card-media>
        <img :src="halaman._embedded | feature_image" 
        :alt="halaman.title.rendered" v-if="halaman.featured_media > 0">
      </q-card-media>
      <q-card-title>
        {{halaman.title.rendered}}
      </q-card-title>
      <q-card-main>
        <p v-html='halaman.content.rendered' />
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'halamanRinci',
  data() {
    return {
      id: null,
      halaman: {}
    }
  },
  created() {
    this.id = this.$route.params.id
    this.ambilHalaman(this.id)
  },
  methods: {
    ambilHalaman(id) {
      const hl = this.$store.getters['halaman/getHalaman']

      this.halaman = hl.filter(el => {
        return (el.id === parseInt(id))
      })[0]
    }
  }
}
</script>

<style>
</style>
