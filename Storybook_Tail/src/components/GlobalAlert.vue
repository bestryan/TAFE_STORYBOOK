<template>
  <div :class="['alert', type]" v-show="visible">
    <div class="message">{{ message }}</div>

    <svg
      class="pointer"
      @click="handleClick"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8.71875 7.28125L7.28125 8.71875L14.5625 16L7.28125 23.2812L8.71875 24.7188L16 17.4375L23.2812 24.7188L24.7188 23.2812L17.4375 16L24.7188 8.71875L23.2812 7.28125L16 14.5625L8.71875 7.28125Z"
        fill="black"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    type: String,
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleClick() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  padding: 0.5rem 1.5rem;
  align-items: center;
  gap: 1rem;
  background: var(--course-apricot-200, #f4c04f);
  justify-content: space-between;
}
svg {
  width: rem;
  height: 2rem;
  flex-shrink: 0;
}
.message {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.pointer {
  cursor: pointer;
}
</style>
