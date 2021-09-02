<template>
  <footer class="bg-dark text-center text-white">
    <div class="container p-4">
      <section class="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia
          magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>
      <section class="">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li v-for="kategori in kategoriler" :key="kategori.id">
                <a
                  href="javascript:void(0)"
                  @click="$router.push('/kategori' + kategori.slug)"
                  class="text-white"
                  >{{ kategori.ad }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li v-for="kategori in kategoriler" :key="kategori.id">
                <a
                  href="javascript:void(0)"
                  @click="$router.push('/kategori' + kategori.slug)"
                  class="text-white"
                  >{{ kategori.ad }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li v-for="kategori in kategoriler" :key="kategori.id">
                <a
                  href="javascript:void(0)"
                  @click="$router.push('/kategori' + kategori.slug)"
                  class="text-white"
                  >{{ kategori.ad }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul class="list-unstyled mb-0">
              <li v-for="kategori in kategoriler" :key="kategori.id">
                <a
                  href="javascript:void(0)"
                  @click="$router.push('/kategori' + kategori.slug)"
                  class="text-white"
                  >{{ kategori.ad }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © {{ new Date().getFullYear() }} Copyright E-Ticaret
    </div>
  </footer>
</template>

<script>
export default {
  props: ["kategoriler"],
};
</script>
