import Vue from 'vue';
import App from './App.vue';
import router from './router';
import minxin from 'public/js/Mixins';
Vue.mixin(minxin);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
