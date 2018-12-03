import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  create () {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: 'AIzaSyAoNQi-eMRQVtwdKq_Ol1oqbRegdgi8GuY',
      authDomain: 'vue-practic1.firebaseapp.com',
      databaseURL: 'https://vue-practic1.firebaseio.com',
      projectId: 'vue-practic1',
      storageBucket: 'vue-practic1.appspot.com',
      messagingSenderId: '596783803061'
    })
  }
})
