import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Upcoming from '../views/Upcoming.vue'
// import Library from '@/views/Library.vue'
import Books from '@/components/Books.vue'
import Library from '@/views/Library.vue'
import Volunteer from '@/components/Signup.vue'
import Donations from '@/views/Donations.vue'
import BookDetail from '@/views/BookDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming,
    },
    {
      path: '/library',
      name: 'library',
      component: Library,
    },
    {
      path:'/volunteer',
      name: 'volunteer',
      component: Volunteer,
    },
    {
      path: '/donations',
      name: 'donations',
      component: Donations,
    },
    {
      path: '/book/:id',
      name: 'bookdetail',
      component: BookDetail,
      props: true,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/Upcoming.vue')
    }
  ]
})

export default router
