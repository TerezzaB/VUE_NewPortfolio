<template>
    <div class="wrapper text-left flex justify-between">
        <div class="flex flex-col">
            <h1>About Me</h1>
            <div class="pulse-button"><button>Contact Me!</button></div>
        </div>
        <p class="text-lg">
            I'm passionate about crafting clean and efficient code that brings ideas to life. <br>
            With a keen eye for design and a love for problem-solving, <br>
            I specialize in creating seamless web pages and applications. <br>
            This page is a glimpse into my journey as a web developer, <br>
            showcasing my skills and dedication to building user-friendly websites that make an impact.
        </p>
    </div>
    <div class="flex justify-center items-center" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 arrow_svg">
            <path fill-rule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
    </div>
</template>


<script>
export default {
  methods: {
    handleClick() {
      this.$emit('scrollDown');
    }
  }
};
</script>

<style scoped>
    .wrapper { padding-bottom: 10%; }
    .wrapper h1 { color: #FFF; font-size: 70px; font-weight: bold; line-height: 75px; margin-bottom: 30px; }
    .wrapper button { margin-top: 60px; padding: 12px 25px; font-weight: bold; border-radius: 25px; background: var(--gradient); }
    .wrapper button:hover { box-shadow: var(--second-color, 0 0 #0000), var(--second-color, 0 0 #0000); transition: transform 0.3s; transform: scale(1.2); cursor: pointer; }

</style>
