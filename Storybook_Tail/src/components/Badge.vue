<template>
  <div :class="badgeClass">
    <div>
      {{ number }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: { type: Number, required: true },
  },
  computed: {
    badgeClass() {
      if (this.number >= 10) {
        return 'badge large';
      } else if (this.number <= 0) {
        return 'badge none';
      } else {
        return 'badge';
      }
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  padding: 0rem 0.5rem;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 6.25rem;
  background: var(--Teal-100, #73d7bf);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: var(--Black, #000);
  text-align: center;
}
.large {
  padding: 0rem 0.5rem;
  width: auto;
}
.none {
  display: none;
}
</style>
