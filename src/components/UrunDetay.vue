<template>
  <div class="row">
    <div class="col-md-6">
      <img src="https://picsum.photos/500/400" />
    </div>
    <div class="col-md-6">
      <h4>Ürün Detayları</h4>
      <ul class="list-group">
        <li class="list-group-item">Urun ID: {{ urunId }}</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urunId: this.$route.params.urunId,
    };
  },
};
</script>
