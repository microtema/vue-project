import Vue from 'vue';
import 'es6-promise/auto'; //must import before use Vuex
import Vuex from 'vuex';
import App from './App.vue';
import modules from './modules';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    modules
});

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
