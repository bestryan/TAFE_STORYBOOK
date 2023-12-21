<template>
  <div :class="['lg:flex', type]">
    <img
      class="object-cover object-center lg:w-1/2"
      src="../stories/assets/DCE-Showcase-Facilities.jpeg"
      alt="DCE-Showcase-Facilities"
    />
    <div class="lg:p-12 lg:w-1/2 py-6">
      <div class="text-base font-bold text-tafe-grey-600 mb-2">
        {{ overview }}
      </div>
      <div class="text-2xl font-bold mb-4 lg:mb-6">
        {{ title }}
      </div>
      <div class="mb-6">
        {{ content_one }}
      </div>
      <div class="mb-4 lg:mb-6">{{ content_two }}</div>
      <div v-if="button_visible"><Button primary label="Button" /></div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
  props: {
    type: String,
    overview: String,
    title: String,
    content_one: String,
    content_two: String,
    button_visible: Boolean,
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
