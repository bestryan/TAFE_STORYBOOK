<template>
  <ul class="max-w-2xl">
    <li v-for="(item, index) in items" :key="index">
      <div class="box">
        <div class="sq"></div>
        <div class="text">{{ item }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isNumbered: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: baseline;
  gap: 0.44rem;
  padding-left: 0.44rem;
  margin-bottom: 0.5rem;
}

.sq {
  width: 0.375rem;
  height: 0.375rem;
  background-color: #7a78c3;
}

.text {
  font-size: 0.75rem;
}
</style>
