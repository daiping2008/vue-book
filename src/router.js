import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/eBook'
    },
    {
      path: '/eBook',
      component: () => import('@/views/eBook'),
      children: [
        {
          path: ':fileName',
          component: () => import('@/components/eBook/EbookReader')
        }
      ]
    }
  ]
})
