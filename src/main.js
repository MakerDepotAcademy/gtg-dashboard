import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use( new VueSocketIO({
		debug: true,
		connection: 'http://localhost:3030',
		vuex:{
			store,
			actionPrefix: 'SOCKET_'
		}
	})
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
