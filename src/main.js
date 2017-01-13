import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'

import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import 'common/styles/index.styl'
import Show from './libs/show'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Show)
let app = Vue.extend(App)

let router = new VueRouter({
	//自定义激活时的类名  默认：v-link-active
	linkActiveClass: 'active',
	//下面两行去掉！#
	hashbang: false,
  history: true

})

router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    },
		'/': {
		component: goods
   }
})

router.start(app, '#app')

/*默认路径 开启后自动切换到goods*/
router.go('/goods')
