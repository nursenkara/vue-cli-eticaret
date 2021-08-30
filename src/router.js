import { createWebHistory, createRouter } from 'vue-router'
import Urunler from './components/Urunler'
import Kategori from './components/Kategori'
import UrunDetay from './components/UrunDetay'

const routes = [
  { path: '/', component: Urunler },
  { path: '/kategori/:slug', component: Kategori },
  { path: '/urun/:urunId', component: UrunDetay },
]

const router = createRouter({
  history: createWebHistory(''),
  routes: routes,
})

export default router
