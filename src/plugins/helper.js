export default ({ app, router, Vue }) => {
  Vue.filter('feature_image', val => {
    if (val['wp:featuredmedia']) {
      return val['wp:featuredmedia'][0].source_url
    }
  })
}
