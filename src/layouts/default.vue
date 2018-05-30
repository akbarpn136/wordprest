<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="tertiary" >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu" >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          WORDPREST
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-list-header>
          <h1 class="text-center">Navigasi</h1>
        </q-list-header>
        <q-item :to="{name: 'utama'}" exact>
          <q-item-side icon="fa fa-home" />
          <q-item-main label="Utama" sublabel="Halaman utama" />
        </q-item>
        <q-item :to="{name: 'berita'}">
          <q-item-side icon="fa fa-bookmark" />
          <q-item-main label="Berita" sublabel="Kumpulan berita menarik" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
