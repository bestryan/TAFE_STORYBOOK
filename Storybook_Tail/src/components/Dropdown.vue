<template>
  <div>
    <div class="text-base font-bold mb-2">Label</div>
    <div class="dropdown" @click="toggleDropdown">
      <div class="selected-option flex justify-between">
        {{ selectedOption ? selectedOption.label : 'Please select' }}
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="w-6 h-6"
          >
            <path
              d="M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z"
              fill="black"
            /></svg
        ></span>
      </div>

      <div v-if="isDropdownOpen" class="dropdown-options show">
        <div
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          :class="{
            selected: selectedOption && selectedOption.value === option.value,
          }"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = true;
      this.$emit('change', option);
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  cursor: pointer;
  max-width: 30rem;
  height: auto;
}

.selected-option {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #676769;
  font-size: 1rem;
  margin-bottom: 10rem;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  margin-top: -1px;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  display: none;
}

.dropdown-options div {
  padding: 10px;
  cursor: pointer;
}

.dropdown-options div:hover {
  background-color: #f4f4f5;
}
.dropdown-options.show {
  display: block;
}
.selected {
  background-color: #80ade1;
}
</style>
