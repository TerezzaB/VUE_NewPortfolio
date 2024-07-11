<template>
  <div class="home-wrapper">
    <HomeHeader @scrollDown="scrollToSkillSet"/>
    <SkillSet ref="skillSetComponent"/>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'
import SkillSet from '@/components/home/SkillSet.vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    SkillSet,
  },

  methods: {
    scrollToSkillSet() {
      const componentPosition = this.$refs.skillSetComponent.$el.offsetTop;

      window.scrollTo({
        top: componentPosition,
        behavior: 'smooth'
      });
    }
  }
}
</script>


<style>
.home-wrapper { max-width: 1300px; margin: 10% auto; }
</style>