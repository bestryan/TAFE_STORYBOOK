<template>
  <div
    class="max-w-3xl border border-neutral-300 shadow-md h-full transform hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease"
  >
    <div class="p-6 border-t-4 border-tafe-pink-300">
      <div class="text-sm font-bold text-tafe-grey-600 leading-tight mb-1">
        {{ level }}
      </div>
      <div class="block text-xl font-bold leading-tight mb-3">
        {{ subject }}
      </div>
      <div class="text-base font-bold text-tafe-grey-600 mb-4">{{ code }}</div>
      <div class="text-base mb-4">
        {{ content }}
      </div>

      <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Attribute
          title="Delivery"
          tooltip="Method of course delivery."
          content="On campus and Combination"
          selectedSvgName="onCampus"
        />
        <Attribute
          title="Schedule"
          tooltip="Pace and number of hours."
          content="Full Time, Part Time and Self paced"
          selectedSvgName="schedule"
        />
        <Attribute
          title="Career pathways"
          tooltip="Career pathways"
          content="trainee seamstress, trainee pattern maker and junior design assistant."
          selectedSvgName="duration"
        />
      </div>

      <div class="flex flex-row-reverse">
        <ButtonNext light label="View Course" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonNext from './ButtonNext.vue';
import Attribute from './Attribute.vue';

export default {
  components: { ButtonNext, Attribute },
  props: {
    type: String,
    level: String,
    subject: String,
    code: String,
    content: String,
  },
};
</script>

<style scoped></style>
