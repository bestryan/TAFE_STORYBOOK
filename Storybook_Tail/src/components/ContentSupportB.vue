<template>
  <div class="max-w-[25.5rem] px-4 py-6 border border-gray-200 shadow bg-white">
    <div>
      <ul class="space-y-3">
        <li
          class="flex items-baseline text-[0.875rem] leading-normal gap-1"
          v-for="(list, index) in lists"
          :key="index"
        >
          <div class="w-2 h-2 m-2 bg-tafe-pink-300"></div>
          <div>
            <div>
              <strong>{{ list.services }}</strong>
            </div>
            <div>
              Phone <span class="underline font-bold"> {{ list.phone }}</span>
            </div>
            <div v-if="list.email != null">
              Email <span class="underline font-bold"> {{ list.email }}</span>
            </div>
          </div>
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
