<template>
  <q-page>
    <q-list no-border highlight sparse separator v-if="this.$route.name === 'utama'">
        <q-item v-for="hl in halaman" :key="hl.id" :to="{name: 'halaman_rinci', params: {'id': hl.id}}">
          <q-item-side :image="hl._embedded | feature_image" v-if="hl.featured_media > 0" />
          <q-item-main>
            <q-item-tile label>{{hl.title.rendered}}</q-item-tile>
            <q-item-tile sublabel lines="3">
              <p v-html="hl.excerpt.rendered" />  
            </q-item-tile>
          </q-item-main>
        </q-item>
    </q-list>
    <router-view />
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
    }
  }
}
</script>
