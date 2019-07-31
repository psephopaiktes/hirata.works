import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

window.console.log(
  // TODO
  '%c 🕶 Mafia vs Painter 👩‍🎨%c\nhttps://github.com/psephopaiktes/mafia-vs-painter',
  `
    background: #B20;
    padding: 20px 40px;
    letter-spacing: .5em;
    color: #fff;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `,
  `
    padding: 20px 0 40px;
  `,
);