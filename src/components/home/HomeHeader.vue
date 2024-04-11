<template>
    <div class="wrapper">
        <h1 class="text-left">
            <div>Hello, I'm a</div> 
            <div>Front end Developer</div>
        </h1>
        <div class="text-left"><button>Subscribe</button></div>
    </div>
</template>

<style scoped>
    .wrapper { padding: 10% 20% }
    .wrapper h1 { color: #FFF; font-size: 70px; font-weight: bold; line-height: 75px; margin-bottom: 30px; }
    .wrapper button { padding: 12px 25px; font-weight: bold; background-color: var(--second-color); border-radius: 25px; background: linear-gradient(90deg, var(--main-color), var(--second-color)); }
    .wrapper button:hover { box-shadow: var(--second-color, 0 0 #0000), var(--second-color, 0 0 #0000); }
</style>