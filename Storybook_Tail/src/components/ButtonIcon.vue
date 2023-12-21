<template>
  <button :class="computedClasses" class="button-container">
    <div class="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path :d="selectedSvgPath" fill="currentColor" />
      </svg>
    </div>
    <div>
      {{ label }}
    </div>
  </button>
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
    selectedSvgName: String,
  },
  data() {
    return {
      selectedSvgName: this.selectedSvgName,
      svgPaths: {
        action:
          'M5 6C3.35547 6 2 7.35547 2 9V23C2 24.6445 3.35547 26 5 26H27C28.6445 26 30 24.6445 30 23V9C30 7.35547 28.6445 6 27 6H5ZM5 8H27C27.5664 8 28 8.43359 28 9V23C28 23.5664 27.5664 24 27 24H5C4.43359 24 4 23.5664 4 23V9C4 8.43359 4.43359 8 5 8ZM11 10C8.80078 10 7 11.8008 7 14C7 15.1133 7.47656 16.1172 8.21875 16.8438C6.88672 17.7461 6 19.2812 6 21H8C8 19.332 9.33203 18 11 18C12.668 18 14 19.332 14 21H16C16 19.2812 15.1133 17.7461 13.7812 16.8438C14.5234 16.1172 15 15.1133 15 14C15 11.8008 13.1992 10 11 10ZM18 11V13H26V11H18ZM11 12C12.1172 12 13 12.8828 13 14C13 15.1172 12.1172 16 11 16C9.88281 16 9 15.1172 9 14C9 12.8828 9.88281 12 11 12ZM18 15V17H26V15H18ZM18 19V21H23V19H18Z',
        empty:
          'M16 4C9.38281 4 4 9.38281 4 16C4 22.6172 9.38281 28 16 28C22.6172 28 28 22.6172 28 16C28 9.38281 22.6172 4 16 4ZM16 6C21.5352 6 26 10.4648 26 16C26 21.5352 21.5352 26 16 26C10.4648 26 6 21.5352 6 16C6 10.4648 10.4648 6 16 6Z',
        find: 'M4 5V27H19.4688L20.125 26.3438C19.9336 25.9141 19.7617 25.4688 19.6562 25H6V11H26V16.5312C26.1641 16.5195 26.332 16.5 26.5 16.5C27.0156 16.5 27.5156 16.5508 28 16.6562V5H4ZM6 7H26V9H6V7ZM9 13V15H11V13H9ZM13 13V15H23V13H13ZM9 17V19H11V17H9ZM13 17V19H20.5C21.1094 18.1914 21.8984 17.5078 22.7812 17H13ZM26.5 18C23.4727 18 21 20.4727 21 23.5C21 24.6484 21.3594 25.707 21.9688 26.5938L18.2812 30.2812L19.7188 31.7188L23.4062 28.0312C24.293 28.6406 25.3516 29 26.5 29C29.5273 29 32 26.5273 32 23.5C32 20.4727 29.5273 18 26.5 18ZM26.5 20C28.4453 20 30 21.5547 30 23.5C30 25.4453 28.4453 27 26.5 27C24.5547 27 23 25.4453 23 23.5C23 21.5547 24.5547 20 26.5 20ZM9 21V23H11V21H9ZM13 21V23H19.0312C19.0781 22.3047 19.2109 21.6328 19.4375 21H13Z',
        help: 'M16 4C9.38281 4 4 9.38281 4 16C4 22.6172 9.38281 28 16 28C22.6172 28 28 22.6172 28 16C28 9.38281 22.6172 4 16 4ZM16 6C21.5352 6 26 10.4648 26 16C26 21.5352 21.5352 26 16 26C10.4648 26 6 21.5352 6 16C6 10.4648 10.4648 6 16 6ZM16 10C13.8008 10 12 11.8008 12 14H14C14 12.8828 14.8828 12 16 12C17.1172 12 18 12.8828 18 14C18 14.7656 17.5078 15.4453 16.7812 15.6875L16.375 15.8125C15.5586 16.082 15 16.8633 15 17.7188V19H17V17.7188L17.4062 17.5938C18.9453 17.082 20 15.6211 20 14C20 11.8008 18.1992 10 16 10ZM15 20V22H17V20H15Z',
        enrol:
          'M5 6C3.35547 6 2 7.35547 2 9V23C2 24.6445 3.35547 26 5 26H27C28.6445 26 30 24.6445 30 23V9C30 7.35547 28.6445 6 27 6H5ZM5 8H27C27.5664 8 28 8.43359 28 9V23C28 23.5664 27.5664 24 27 24H5C4.43359 24 4 23.5664 4 23V9C4 8.43359 4.43359 8 5 8ZM11 10C8.80078 10 7 11.8008 7 14C7 15.1133 7.47656 16.1172 8.21875 16.8438C6.88672 17.7461 6 19.2812 6 21H8C8 19.332 9.33203 18 11 18C12.668 18 14 19.332 14 21H16C16 19.2812 15.1133 17.7461 13.7812 16.8438C14.5234 16.1172 15 15.1133 15 14C15 11.8008 13.1992 10 11 10ZM18 11V13H26V11H18ZM11 12C12.1172 12 13 12.8828 13 14C13 15.1172 12.1172 16 11 16C9.88281 16 9 15.1172 9 14C9 12.8828 9.88281 12 11 12ZM18 15V17H26V15H18ZM18 19V21H23V19H18Z',
        waitList:
          'M10.293 5.29297L7 8.58594L5.70703 7.29297L4.29297 8.70703L7 11.4141L11.707 6.70703L10.293 5.29297ZM14 7V9H28V7H14ZM14 15V17H28V15H14ZM14 23V25H28V23H14Z',
        info: 'M5 5V27H12.5625L15.2812 29.7188L16 30.4062L16.7188 29.7188L19.4375 27H27V5H5ZM7 7H25V25H18.5938L18.2812 25.2812L16 27.5625L13.7188 25.2812L13.4062 25H7V7ZM15 10V12H17V10H15ZM15 14V22H17V14H15Z',
        heart:
          'M9.5 5C5.36328 5 2 8.40234 2 12.5C2 13.9297 2.64844 15.168 3.25 16.0625C3.85156 16.957 4.46875 17.5312 4.46875 17.5312L15.2812 28.375L16 29.0938L16.7188 28.375L27.5312 17.5312C27.5312 17.5312 30 15.3555 30 12.5C30 8.40234 26.6367 5 22.5 5C19.0664 5 16.8555 7.06641 16 7.9375C15.1445 7.06641 12.9336 5 9.5 5ZM9.5 7C12.4883 7 15.25 9.90625 15.25 9.90625L16 10.75L16.75 9.90625C16.75 9.90625 19.5117 7 22.5 7C25.543 7 28 9.49609 28 12.5C28 14.043 26.125 16.125 26.125 16.125L16 26.25L5.875 16.125C5.875 16.125 5.39062 15.6602 4.90625 14.9375C4.42188 14.2148 4 13.2734 4 12.5C4 9.49609 6.45703 7 9.5 7Z',
      },
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
    selectedSvgPath() {
      return this.svgPaths[this.selectedSvgName];
    },
  },
};
</script>

<style scoped>
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
