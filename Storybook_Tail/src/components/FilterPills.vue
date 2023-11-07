<template>
  <div :class="['filterPills', type]" v-show="visible">
    <div class="message">{{ label }}</div>

    <svg
      @click="handleClick"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.53906 5.46094L5.46094 6.53906L10.9219 12L5.46094 17.4609L6.53906 18.5391L12 13.0781L17.4609 18.5391L18.5391 17.4609L13.0781 12L18.5391 6.53906L17.4609 5.46094L12 10.9219L6.53906 5.46094Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
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
svg {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
.filterPills {
  display: inline-flex;
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
}

.select {
  border-radius: 6.25rem;
  background: var(--brand-blue-600, #1355a0);
  color: #fff;
}

.clear {
  border-radius: 6.25rem;
  background: var(--greys-black, #000);
  color: #fff;
}
.icon {
  border-radius: 6.25rem;
  background: var(--brand-blue-600, #1355a0);
  color: #fff;
  padding: 0.25rem !important;
  gap: 0;
}
</style>
