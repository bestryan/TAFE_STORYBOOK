<template>
  <div
    :class="[
      'm-4 border border-neutral-300 shadow-md h-full transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease',
      type,
    ]"
  >
    <div :class="['p-6 border-t-4 border-violet-500', type]">
      <div class="text-sm font-bold text-gray-800 leading-tight">
        {{ level }}
      </div>
      <div class="block text-xl font-bold leading-tight mb-3">
        {{ subject }}
      </div>
      <div class="text-base font-bold text-gray-700 mb-4">National Code</div>
      <div class="text-base mb-4">
        {{ content }}
      </div>
      <div>
        <AccordionCourse
          title="Entry Requirements"
          :items="listOne"
          class="cursor-pointer mb-2"
        />
      </div>
      <div>
        <AccordionCourse
          title="Career Pathways"
          :items="listTwo"
          class="cursor-pointer mb-6"
        />
      </div>
      <div class="flex flex-row-reverse">
        <ButtonNext light label="View Course" />
      </div>
    </div>
  </div>
</template>

<script>
import AccordionCourse from './AccordionCourse.vue';
import ButtonNext from './ButtonNext.vue';

export default {
  components: { AccordionCourse, ButtonNext },
  props: {
    type: String,
    level: String,
    subject: String,
    code: String,
    content: String,
    listOne: Array,
    listTwo: Array,
  },
};
</script>

<style scoped>
.desktop {
  max-width: 50rem;
}
.mobile {
  max-width: 22.75rem;
}
</style>
