<template>
  <div :class="['h-[20em] max-h-full lg:flex', styles]">
    <div
      class="pt-6 pb-4 px-4 bg-tafe-grey-700 lg:py-10 lg:pl-12 lg:pr-6 lg:w-1/2"
    >
      <Pills label="Enrolment open" type="green" />
      <div class="text-base font-bold text-white mt-6">
        {{ subheading }}
      </div>
      <div class="text-5xl font-bold mb-4 text-tafe-aqua-300 mt-4">
        {{ heading }}
      </div>
      <div v-if="button_visible" class="mt-6 lg:flex lg:gap-2">
        <ButtonIcon
          dark
          label="Add to shortlist"
          selectedSvgName="heart"
          class="mb-2 w-full lg:w-auto"
        />
        <ButtonIcon
          dark
          label="Add to question"
          selectedSvgName="help"
          class="mb-2 w-full lg:w-auto"
        />
        <div class="hidden xl:block">
          <ButtonIcon
            primary
            label="Find a location to enrol"
            selectedSvgName="find"
            class="mb-2 w-full lg:w-auto"
          />
        </div>
      </div>
      <div class="xl:hidden">
        <ButtonIcon
          primary
          label="Find a location to enrol"
          selectedSvgName="find"
          class="mb-2 w-full lg:w-auto"
        />
      </div>
    </div>

    <img
      class="object-cover object-center lg:w-1/2"
      src="../stories/assets/makeup.jpeg"
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
    button_visible: Boolean,
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
