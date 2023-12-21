<template>
  <div :class="['h-[22.5em] max-h-full lg:flex', styles]">
    <div class="p-6 bg-tafe-grey-700 lg:px-20 lg:py-12 lg:w-1/2">
      <div class="text-5xl font-bold text-white mt-4">
        {{ heading }}
      </div>
      <div class="text-5xl font-bold mb-6 text-white mt-4">
        {{ subheading }}
      </div>
      <div class="text-xl text-white">
        {{ content }}
      </div>
    </div>

    <img
      class="h-[18rem] object-cover object-center lg:h-auto lg:w-1/2"
      src="../stories/assets/twofemalestudents.png"
      alt="makeup"
    />
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue';
import Pills from './Pills.vue';

export default {
  components: { ButtonIcon, Pills },
  props: {
    styles: String,
    subheading: String,
    heading: String,
    content: String,
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
