<template>
  <button :class="computedClasses" @click="changeIcon" class="button-container">
    <div class="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path :d="iconPath" fill="currentColor" />
      </svg>
    </div>
    <div>
      {{ label }}
    </div>
  </button>

  <!-- <button :class="computedClasses" @click="handleClick">{{ label }}</button> -->
</template>

<script>
const path1 =
  'M16 4C9.38281 4 4 9.38281 4 16C4 22.6172 9.38281 28 16 28C22.6172 28 28 22.6172 28 16C28 9.38281 22.6172 4 16 4ZM16 6C21.5352 6 26 10.4648 26 16C26 21.5352 21.5352 26 16 26C10.4648 26 6 21.5352 6 16C6 10.4648 10.4648 6 16 6Z';
const path2 =
  'M4 5V27H19.4688L20.125 26.3438C19.9336 25.9141 19.7617 25.4688 19.6562 25H6V11H26V16.5312C26.1641 16.5195 26.332 16.5 26.5 16.5C27.0156 16.5 27.5156 16.5508 28 16.6562V5H4ZM6 7H26V9H6V7ZM9 13V15H11V13H9ZM13 13V15H23V13H13ZM9 17V19H11V17H9ZM13 17V19H20.5C21.1094 18.1914 21.8984 17.5078 22.7812 17H13ZM26.5 18C23.4727 18 21 20.4727 21 23.5C21 24.6484 21.3594 25.707 21.9688 26.5938L18.2812 30.2812L19.7188 31.7188L23.4062 28.0312C24.293 28.6406 25.3516 29 26.5 29C29.5273 29 32 26.5273 32 23.5C32 20.4727 29.5273 18 26.5 18ZM26.5 20C28.4453 20 30 21.5547 30 23.5C30 25.4453 28.4453 27 26.5 27C24.5547 27 23 25.4453 23 23.5C23 21.5547 24.5547 20 26.5 20ZM9 21V23H11V21H9ZM13 21V23H19.0312C19.0781 22.3047 19.2109 21.6328 19.4375 21H13Z';
export default {
  name: 'ButtonNext',
  props: {
    primary: Boolean,
    secondary: Boolean,
    light: Boolean,
    dark: Boolean,
    label: String,
    initialIconPath: String,
  },
  data() {
    return {
      iconPath: path1,
    };
  },
  computed: {
    computedClasses() {
      return {
        'primary-button': this.primary,
        'secondary-button': this.secondary,
        'light-button': this.light,
        'dark-button': this.dark,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
    changeIcon() {
      if (this.iconPath === path1) {
        this.iconPath = path2;
      } else {
        this.iconPath = path1;
      }
    },
  },
};
</script>

<style scoped>
/* Define your CSS classes here */
.button-container {
  display: flex;
  align-items: center;
}

.icon-container {
  margin-right: 0.6rem;
}

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
  border: 1px solid #165fb4;
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
  border: 1px solid #676769;
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
</style>
