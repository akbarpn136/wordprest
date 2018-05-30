<template>
  <q-page>
    <q-list no-border highlight sparse separator>
        <q-item v-for="hl in halaman" :key="hl.id">
          <q-item-side :image="ambilFeatureImage(hl._embedded)" v-if="ambilFeatureImage(hl._embedded)" />
          <q-item-main>
            <q-item-tile label>{{hl.title.rendered}}</q-item-tile>
            <q-item-tile sublabel lines="3">
              <p v-html="hl.excerpt.rendered" />  
            </q-item-tile>
          </q-item-main>
        </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      halaman: {}
    }
  },
  created () {
    this.$store.commit('halaman/resetHalaman')
    this.fetchHalaman()
  },
  methods: {
    fetchHalaman() {
      this.$store.dispatch('halaman/fetchHalaman')
      .then(res => {
        res.data.forEach(data => {
          this.$store.commit('halaman/setHalaman', data)
          this.halaman = this.$store.getters['halaman/getHalaman']
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    ambilFeatureImage(data) {
      if (data['wp:featuredmedia']) {
        return data['wp:featuredmedia'][0].source_url
      }
    }
  }
}
</script>
