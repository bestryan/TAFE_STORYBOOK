<template>
  <div
    class="m-4 border border-gray-200 shadow bg-white p-4 gap-3 lg:p-6 lg:flex items-center"
  >
    <div
      class="flex flex-col gap-3 mb-4 lg:mb-0 lg:flex lg:flex-row lg:flex-1 lg:items-center"
    >
      <div><Pills :label="status" :type="type" /></div>
      <div>
        {{ content }}
      </div>
    </div>
    <div class="md:flex md:flex-row md:gap-3">
      <div class="mb-2 md:mb-0">
        <ButtonIcon
          dark
          label="Ask a question"
          selectedSvgName="help"
          class="lg:w-auto w-full"
        />
      </div>
      <div>
        <ButtonIcon
          primary
          :label="label"
          :selectedSvgName="selectedSvgName"
          class="lg:w-auto w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pills from './Pills.vue';
import ButtonIcon from './ButtonIcon.vue';
export default {
  components: { Pills, ButtonIcon },
  props: {
    content: String,
    status: String,
    type: String,
    selectedSvgName: String,
    label: String,
  },
};
</script>

<style></style>
