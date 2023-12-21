<template>
  <div class="text-base font-bold">{{ title }}</div>
  <div :class="['lg:flex gap-10', direction]">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="flex items-center gap-4"
    >
      <label class="custom-radio-btn">
        <input
          type="radio"
          :name="name"
          :value="option.value"
          v-model="selectedOption"
          @change="handleChange"
        />
        <span class="checkmark"></span>
      </label>
      <span class="mt-3"> {{ option.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    name: String,
    title: String,
    direction: String,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    handleChange() {
      this.$emit('change', this.selectedOption);
    },
  },
};
</script>

<style scoped>
.row {
  gap: 2rem;
}
.col {
  display: block;
}
.custom-radio-btn {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid var(--Grey-500, #676769);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  cursor: pointer;
}
.custom-radio-btn:hover {
  box-shadow: 0 0 0 0.5px #676769;
}
.custom-radio-btn:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.custom-radio-btn:active {
  box-shadow: 0 0 0 2px #5d97d9;
}
.custom-radio-btn .checkmark {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 50%;
  background: var(--Web-Blue, #4768d6);
  display: none;
}
.custom-radio-btn input {
  display: none;
}
.custom-radio-btn input:checked + .checkmark {
  display: inline-block;
}
</style>
