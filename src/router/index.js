import Vue from 'vue'
import Router from 'vue-router'
import Cdn from '@/components/Cdn'
import CdnDetail from '@/components/CdnDetail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Cdn
        },
        {
            path: '/cdns/:name',
            component: CdnDetail
        }
    ]
})
