<template>
  <div>
    {{ kategoriSlug }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      kategoriSlug: this.$route.params.slug,
    };
  },
  created() {
    axios
      .get("http://localhost:3000/kategoriler")
      .then((response) => {
        this.kategoriler = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
