<template>
  <div class="text-base font-bold">{{ title }}</div>
  <div
    v-for="(option, index) in options"
    :key="index"
    class="flex items-center gap-4"
  >
    <label class="custom-check-btn">
      <input
        type="checkbox"
        :name="name"
        :value="option.value"
        @change="handleChange"
      />
      <span class="checkmark"></span>
    </label>
    <span class="mt-3">{{ option.label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    name: String,
    title: String,
  },
  methods: {
    handleChange() {
      this.$emit('change', this.selectedOption);
    },
  },
};
</script>

<style scoped>
.custom-check-btn {
  min-width: 1.25rem;
  min-height: 1.25rem;
  border-radius: 20%;
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%2219%22%20height%3D%2219%22%20rx%3D%223.5%22%20stroke%3D%22%23676769%22%2F%3E%0A%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  cursor: pointer;
}
.custom-check-btn:hover {
  box-shadow: 0 0 0 0.5px #676769;
}
.custom-check-btn:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.custom-check-btn:active {
  box-shadow: 0 0 0 2px #5d97d9;
}
.custom-check-btn .checkmark {
  min-width: 1.25rem;
  min-height: 1.25rem;
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%2219%22%20height%3D%2219%22%20rx%3D%223.5%22%20stroke%3D%22%23676769%22%2F%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17.6569%206.65685L15.5355%204.53553L8.46447%2011.6066L4.92893%208.07107L2.80761%2010.1924L8.46447%2015.8492L10.5858%2013.7279L17.6569%206.65685Z%22%20fill%3D%22%234768D6%22%2F%3E%0A%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  display: none;
}
.custom-check-btn input {
  display: none;
}
.custom-check-btn input:checked + .checkmark {
  display: inline-block;
}
</style>
