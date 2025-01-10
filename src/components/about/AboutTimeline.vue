<template>
    <div class="wrapper">
        <P-Timeline :value="this.events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <P-Card class="mt-4">
                    <template #title>
                        <div class="custom-text-header">{{ slotProps.item.status }}</div>
                    </template>
                    <template #subtitle>
                        <div class="custom-text-subtitle">{{ slotProps.item.date }}</div>
                    </template>
                    <template #content>
                        <div class="text-white" v-html="slotProps.item.description"></div>
                        <div class="text-white mt-10">
                            <b>
                                <span>{{ slotProps.item.skills }}</span>
                            </b>
                        </div>
                    </template>
                </P-Card>
            </template>
        </P-Timeline>
    </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import jsonData from '../../../data/data.json';

export default {
  setup() {
    const events = ref([]);

    onMounted(() => {
      events.value = jsonData.posts;
    });

    return {
      events
    };
  }
};
</script>

<style scoped>
.wrapper { padding-top: 10%; }

.customized-timeline .p-card { background-color: #14142a; border: 1px solid var(--main-color); }
.customized-timeline .p-card:hover { transition: transform 0.25s; transform: scale(1.04); cursor: pointer; }
.custom-text-header { color: var(--third-color); }
.custom-text-subtitle { color: var(--fourth-color); }
</style>