<template>
  <div class="max-w-md border border-gray-200 shadow bg-white">
    <div class="bg-gray-100 px-5 py-4 border-b border-gray-200">
      <div class="flex items-center justify-between mb-2">
        <div class="text-xl font-bold">{{ title }}</div>
        <div class="text-tafe-grey-600 text-base font-bold">
          <div v-if="items.length < 2">{{ items.length }} Course</div>
          <div v-else>{{ items.length }} Courses</div>
        </div>
      </div>
      <div>{{ content }}</div>
    </div>

    <div class="p-5">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div class="flex justify-between gap-4 mb-4 underline cursor-pointer">
            <div class="text-base">{{ item }}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.0391 5.08594L12.9609 6.16406L18.0469 11.25H3V12.75H18.0469L12.9609 17.8359L14.0391 18.9141L20.4141 12.5391L20.9297 12L20.4141 11.4609L14.0391 5.08594Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';
import ButtonIcon from './ButtonIcon.vue';
export default {
  components: { Tooltip, ButtonIcon },
  props: {
    title: String,
    content: String,
    items: Array,
  },
};
</script>

<style></style>
