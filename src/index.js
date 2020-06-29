// Установить все зависимости
// npm install
// Запустить сервер для дев разработки (http://localhost:8081/)
// npm run dev
// Команда для деплоя (папка на выходе будет как dist)
// npm run build

import './js/common'
import './js'
import './assets/css/main.css'
import './assets/scss/main.scss'

window.Vue = require('vue')
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
    data () {
        return {
            component: false,
        }
    },
    store,
    el: '#app'
})


