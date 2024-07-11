<template>
  <div class="about-wrapper">
    <AboutHeader />
    <AboutTimeline />
  </div>
</template>


<script>
import AboutHeader from '@/components/about/AboutHeader.vue'
import AboutTimeline from '@/components/about/AboutTimeline.vue'

export default {
  name: 'AboutView',
  components: {
    AboutHeader,
    AboutTimeline
  }
}
</script>


<style>
.about-wrapper { max-width: 1300px; margin: 10% auto; }
</style>