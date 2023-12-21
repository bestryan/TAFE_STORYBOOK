<template>
  <div
    class="h-80 bg-center bg-cover bg-no-repeat bg-[url('./stories/assets/chefbanner.jpeg')]"
  >
    <div class="py-10 pl-12 pr-6">
      <Pills label="Enrolment open" type="green" />
      <div class="text-base font-bold text-white mt-6">
        {{ subheading }}
      </div>
      <div class="text-5xl font-bold mb-4 text-tafe-aqua-300 mt-4">
        {{ heading }}
      </div>
      <div v-if="button_visible" class="mt-6 flex gap-2">
        <ButtonIcon
          dark
          label="Add to shortlist"
          selectedSvgName="heart"
          class="mb-2"
        />
        <ButtonIcon
          dark
          label="Add to question"
          selectedSvgName="help"
          class="mb-2"
        />
        <div class="hidden xl:block">
          <ButtonIcon
            primary
            label="Find a location to enrol"
            selectedSvgName="find"
            class="mb-2"
          />
        </div>
      </div>
      <div class="xl:hidden">
        <ButtonIcon
          primary
          label="Find a location to enrol"
          selectedSvgName="find"
          class="mb-2"
        />
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
    button_visible: Boolean,
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
