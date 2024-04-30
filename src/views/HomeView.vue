<template>
  <div class="home">
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
