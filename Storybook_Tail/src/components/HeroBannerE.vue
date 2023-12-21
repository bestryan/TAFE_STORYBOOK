<template>
  <div
    class="h-80 bg-center bg-cover bg-no-repeat bg-[url('./stories/assets/chefbanner.jpeg')]"
  >
    <div class="max-w-2xl py-10 pl-12 pr-6">
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
