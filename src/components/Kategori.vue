<template>
  <div>
    {{ kategoriSlug }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      kategoriSlug: this.$route.params.slug,
    };
  },
};
</script>
