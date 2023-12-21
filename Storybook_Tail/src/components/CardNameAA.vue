<template>
  <div class="max-w-md border border-gray-200 shadow bg-white">
    <div
      class="flex items-center justify-between bg-gray-100 px-5 py-3 border-b border-gray-200"
    >
      <div class="flex gap-2 items-center">
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M28.2812 6.28125L11 23.5625L3.71875 16.2812L2.28125 17.7188L10.2812 25.7188L11 26.4062L11.7188 25.7188L29.7188 7.71875L28.2812 6.28125Z"
            fill="black"
          />
        </svg>
        <div class="text-base font-bold">Nationally Recognised Training</div>
      </div>

      <Tooltip
        tooltip="These courses are nationally standardised so you can train in one state and take a work opportunity in another state without needing to upskill."
      />
    </div>
    <div class="p-5">
      <div class="font-bold text-tafe-grey-600">{{ option }}</div>
      <div class="text-sm mt-2">{{ content }}</div>
      <div class="flex flex-row-reverse">
        <ButtonIcon
          primary
          selectedSvgName="find"
          label="Find a location to enrol"
          class="mt-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';
import ButtonIcon from './ButtonIcon.vue';
export default {
  components: { Tooltip, ButtonIcon },
  props: {
    option: String,
    content: String,
  },
};
</script>

<style></style>
