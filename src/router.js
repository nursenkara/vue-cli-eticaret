import { createWebHistory, createRouter } from 'vue-router'
import Urunler from './components/Urunler'
import Kategori from './components/Kategori'
import UrunDetay from './components/UrunDetay'
import SepetDetay from './components/SepetDetay'
import YonetimPaneli from './components/YonetimPaneli'
import KayitOl from './components/KayitOl'

const routes = [
  { path: '/', component: Urunler },
  { path: '/kategori/:slug', component: Kategori },
  { path: '/urun/:urunId', component: UrunDetay },
  { path: '/sepet', component: SepetDetay },
  { path: '/yonetim-paneli', component: YonetimPaneli },
  { path: '/kayit-ol', component: KayitOl },
]

const router = createRouter({
  history: createWebHistory(''),
  routes: routes,
})

export default router
