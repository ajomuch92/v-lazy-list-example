import Vue from 'vue';
import App from './App.vue';
import VLazyList from 'v-lazy-list';

Vue.config.productionTip = false

Vue.use(VLazyList);

new Vue({
  render: h => h(App),
}).$mount('#app')
