<template>
  <div
    :class="[
      'inline-block whitespace-nowrap h-6 px-3 pt-[4px] pb-[5px] bg-white rounded-[100px] gap-2.5 text-sm font-semibold leading-[14px]',
      type,
    ]"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
  },
};
</script>

<style scoped>
.green {
  border: 1px solid var(--status-green, #1a8478);
  color: var(--status-green, #1a8478);
}
.purple {
  border: 1px solid var(--status-purple, #639);
  color: var(--status-purple, #639);
}
.blue {
  border: 1px solid var(--status-blue, #4768d6);
  color: var(--status-blue, #4768d6);
}
.pink {
  border: 1px solid var(--status-pink, #cd3d8d);
  color: var(--status-pink, #cd3d8d);
}
.red {
  border: 1px solid var(--status-red, #b11030);
  color: var(--status-red, #b11030);
}
</style>
