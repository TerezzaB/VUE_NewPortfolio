<template>
  <div class="about-wrapper">
    <AboutHeader @scrollDown="scrollToSkillSet"/>
    <AboutTimeline ref="mySkills"/>
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
  },
  methods: {
    scrollToSkillSet() {
      const componentPosition = this.$refs.mySkills.$el.offsetTop;

      window.scrollTo({
        top: componentPosition,
        behavior: 'smooth'
      });
    }
  }
}
</script>


<style>
.about-wrapper { max-width: 1300px; margin: 10% auto; }
</style>