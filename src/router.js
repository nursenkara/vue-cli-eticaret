import { createWebHistory, createRouter } from "vue-router";
import Urunler from "./components/Urunler";
import Kategori from "./components/Kategori";
import UrunDetay from "./components/UrunDetay";
import SepetDetay from "./components/SepetDetay";
import AlisverisiTamamla from "./components/AlisverisiTamamla";
import YonetimPaneli from "./components/YonetimPaneli";
import KayitOl from "./components/KayitOl";
import GirisYap from "./components/GirisYap";

const routes = [
  { path: "/", component: Urunler },
  { path: "/kategori/:slug", component: Kategori },
  { path: "/urun/:urunId", component: UrunDetay },
  { path: "/sepet", component: SepetDetay },
  { path: "/alisverisi-tamamla", component: AlisverisiTamamla },
  { path: "/yonetim-paneli", component: YonetimPaneli },
  { path: "/kayit-ol", component: KayitOl },
  { path: "/giris-yap", component: GirisYap },
];

const router = createRouter({
  history: createWebHistory(""),
  routes: routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
