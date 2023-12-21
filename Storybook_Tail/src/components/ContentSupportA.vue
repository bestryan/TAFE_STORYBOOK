<template>
  <div
    class="max-w-[11.75rem] px-4 py-6 border border-gray-200 shadow bg-white"
  >
    <div>
      <ul class="space-y-3">
        <li
          class="flex justify-between flex-wrap text-[0.875rem] leading-normal"
          v-for="(list, index) in lists"
          :key="index"
        >
          <strong>{{ list.day }}</strong>
          <span>{{ list.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array,
  },
};
</script>
