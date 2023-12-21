<template>
  <div class="min-w-[90rem] flex justify-between py-2 px-20 bg-tafe-grey-700">
    <div class="flex gap-2">
      <div class="text-white text-4xl font-bold">
        {{ heading }}
      </div>
      <div class="text-tafe-aqua-300 text-4xl font-bold">
        {{ location }}
      </div>
    </div>
    <div class="flex gap-2 items-center">
      <Pills v-if="button_visible" label="Enrolment open" type="green" />
      <ButtonIcon
        v-if="button_visible"
        dark
        label="Add to shortlist"
        selectedSvgName="heart"
      />
      <ButtonIcon dark label="Add to question" selectedSvgName="help" />
      <ButtonIcon
        primary
        :label="buttonLabel"
        :selectedSvgName="selectedSvgName"
      />
    </div>
  </div>
</template>

<script>
import ButtonIcon from './ButtonIcon.vue';
import Pills from './Pills.vue';
export default {
  components: { ButtonIcon, Pills },
  props: {
    heading: String,
    location: String,
    selectedSvgName: String,
    buttonLabel: String,
    button_visible: Boolean,
  },
};
</script>

<style></style>
