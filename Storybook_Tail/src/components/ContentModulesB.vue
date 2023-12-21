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
      <div class="text-2xl font-bold mb-5 lg:mb-6">
        {{ title }}
      </div>
      <div class="mb-5 lg:mb-6">
        {{ content }}
      </div>
      <div class="mb-4 lg:mb-6">
        <List :isNumbered="isNumbered" :items="items" />
      </div>
      <div v-if="button_visible"><Button primary label="Button" /></div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import List from './List.vue';
export default {
  components: { Button, List },
  props: {
    type: String,
    overview: String,
    title: String,
    content: String,
    items: Array,
    isNumbered: Boolean,
    button_visible: Boolean,
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
