<template>
  <div>
    <div class="flex justify-between" @click="toggleContent">
      <h3 class="text-neutral-500 font-bold">{{ title }}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        :class="{
          'rotate-180 transition-transform': isContentVisible,
        }"
      >
        <path
          d="M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z"
          fill="black"
        />
      </svg>
    </div>

    <div v-if="isContentVisible" class="mt-2">
      <ListOnCourse :items="items" />
    </div>
  </div>
</template>

<script>
import ListOnCourse from './ListOnCourse.vue';

export default {
  components: { ListOnCourse },
  props: {
    title: String,
    items: Array,
  },
  data() {
    return {
      isContentVisible: false,
    };
  },
  methods: {
    toggleContent() {
      this.isContentVisible = !this.isContentVisible;
    },
  },
};
</script>

<style scoped></style>
