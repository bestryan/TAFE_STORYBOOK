<template>
  <div>
    <label
      v-if="isInvalid"
      for="input"
      class="block text-base font-bold mt-4 text-tafe-status-red"
      >{{ label }}</label
    >
    <label v-else for="input" class="block text-base font-bold mt-4">{{
      label
    }}</label>
    <textarea
      required
      id="input"
      name="input"
      :placeholder="placeholder"
      rows="1"
      :class="[
        'w-full max-w-xl px-4 py-[0.81rem] mt-2 border border-tafe-grey-500 shadow bg-white focus:outline-none focus:border-tafe-blue-300 focus:ring-1 focus:ring-tafe-blue-300',
        isInvalid,
      ]"
    />
    <div v-if="isInvalid" class="text-tafe-status-red">
      0 words (minimum 250 words)
    </div>
    <div v-else class="text-tafe-grey-500">0 words (minimum 250 words)</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    isInvalid: String,
    errorMessage: String,
  },
};
</script>

<style scoped>
.invalid {
  border: 1px solid var(--Web-Red, #b11030);

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
}
</style>
