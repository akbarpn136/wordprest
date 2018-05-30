<template>
  <q-page padding>
    <q-list no-border highlight sparse separator>
        <q-item v-for="br in berita" :key="br.id">
          <q-item-side :image="ambilFeatureImage(br._embedded)" v-if="ambilFeatureImage(br._embedded)" />
          <q-item-main>
            <q-item-tile label>{{br.title.rendered}}</q-item-tile>
            <q-item-tile sublabel lines="3">
              <p v-html="br.excerpt.rendered" />  
            </q-item-tile>
          </q-item-main>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageBerita',
  created() {
    this.$store.commit('berita/resetBerita')
    this.fetchBerita()
  },
  data() {
    return {
      berita: {}
    }
  },
  methods: {
    fetchBerita() {
      this.$store.dispatch('berita/fetchBerita')
      .then(res => {
        res.data.forEach(data => {
          this.$store.commit('berita/setBerita', data)
          this.berita = this.$store.getters['berita/getBerita']
        })
      })
      .catch(err => console.log(err))
    },
    ambilFeatureImage(data) {
      if (data['wp:featuredmedia']) {
        return data['wp:featuredmedia'][0].source_url
      }
    }
  }
}
</script>

<style>
</style>
