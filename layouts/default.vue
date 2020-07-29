<template>
  <div>
    <!-- TOP NAVBAR COMPONENT -->
    <top-navbar/>
    <!-- END -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    topNavbar: () => import("@/components/top-navbar/index.vue")
  }
}
</script>