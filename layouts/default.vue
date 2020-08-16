<template>
  <div>
    <!-- TOP NAVBAR COMPONENT -->
    <top-navbar/>
    <!-- END -->
    <Nuxt />
  </div>
</template>
<style>
  .dark-mode {
    @apply text-gray-400 bg-gray-900;
  }

  .light-mode {
    @apply text-css-tools-black bg-css-tools-white;
  }
</style>
<script>
export default {
  components: {
    topNavbar: () => import("@/components/top-navbar/index.vue")
  }
}
</script>
