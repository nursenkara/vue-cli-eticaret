<script>
/*
  <Modal id="modal1" title="Başlık" ref="modal1">
    <template v-slot:body>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sed
      eum explicabo ducimus amet sint officiis at eos officia? Architecto
      explicabo voluptates tenetur ab, assumenda excepturi hic odio deserunt
      illum!
    </template>
    <template v-slot:footer>
      <button class="btn btn-primary" @click="$refs.modal1.Kapat">Tamam</button>
    </template>
  </Modal>
  <button @click="$refs.modal1.Ac" class="m-3 btn btn-secondary">
    Modal Aç
  </button>
*/
import $ from "jquery/src/jquery";

export default {
  props: ["id", "title"],
  methods: {
    Ac() {
      $("#" + this.id).modal("show");
    },
    Kapat() {
      $("#" + this.id).modal("hide");
    },
  },
};
</script>

<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-text="title"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
