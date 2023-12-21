<template>
  <button :class="computedClasses">
    {{ label }}
  </button>
  <!-- <button :class="computedClasses" @click="handleClick">{{ label }}</button> -->
</template>

<script>
/** Control to change boolean value to disabled button */
export default {
  props: {
    primary: Boolean,
    secondary: Boolean,
    light: Boolean,
    dark: Boolean,
    red: Boolean,
    label: String,
  },
  computed: {
    computedClasses() {
      return {
        'primary-button': this.primary,
        'secondary-button': this.secondary,
        'light-button': this.light,
        'dark-button': this.dark,
        'red-button': this.red,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 16px;
  color: #a7a9ac;
  background-color: #f4f4f5;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  border: 1px solid #f4f4f5;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: not-allowed;
}
.primary-button {
  padding: 10px 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  background-color: #165fb4;
  border: 2px solid #165fb4;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.primary-button:hover {
  background-color: #114a8c;
}
.primary-button:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.primary-button:active {
  box-shadow: 0 0 0 2px #5d97d9;
}
.primary-button:disabled {
  color: #a7a9ac;
  background-color: #f4f4f5;
  border: 1px solid #f4f4f5;
}

.secondary-button {
  padding: 10px 16px;
  color: #165fb4;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  background-color: #fff;
  border: 2px solid #165fb4;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.secondary-button:hover {
  background-color: #165fb4;
  color: #ffffff;
}
.secondary-button:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.secondary-button:active {
  box-shadow: 0 0 0 2px #5d97d9;
}

.light-button {
  padding: 10px 16px;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  background-color: #f4f4f5;
  border: 1px solid #d1d2d4;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.light-button:hover {
  background-color: #d1d2d4;
  color: #000000;
}
.light-button:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.light-button:active {
  box-shadow: 0 0 0 2px #5d97d9;
}

.dark-button {
  padding: 10px 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  background-color: #676769;
  border: 2px solid #676769;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.dark-button:hover {
  background-color: #4d4d4d;
  color: #fff;
}
.dark-button:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.dark-button:active {
  box-shadow: 0 0 0 2px #5d97d9;
}

.red-button {
  padding: 10px 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  background-color: #e5143c;
  border: 2px solid #e5143c;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06),
    0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.red-button:focus {
  box-shadow: 0 0 0 2px #5d97d9;
}
.red-button:active {
  box-shadow: 0 0 0 2px #5d97d9;
}
</style>
