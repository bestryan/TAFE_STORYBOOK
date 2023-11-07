<template>
  <div>
    <div class="tab-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = index"
        :class="{ 'active-tab': index === selectedTab }"
      >
        {{ tab.name }}
        <Badge :number="tab.units" />
      </button>
    </div>

    <div class="tab-content">
      <div
        v-show="index === selectedTab"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue';

export default {
  components: { Badge },
  props: ['tabs'],
  data() {
    return {
      selectedTab: 0,
    };
  },
};
</script>

<style scoped>
.tab-buttons {
  gap: 1rem;
  display: flex;
  padding-left: 5rem;
  border-bottom: 1px solid #d1d2d4;
}

.tab-buttons button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #fff;
  padding: 0.85rem;
  border: 0;
  cursor: pointer;
  color: #4d4d4d;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  border-bottom: 1px solid var(--greys-white, #d1d2d4);
  margin-bottom: -1px;
}

.tab-buttons .active-tab {
  border: 1px solid var(--greys-white, #d1d2d4);
  border-bottom: 0;
  margin-bottom: -1px;
}

.tab-content {
  margin-top: 2rem;
  padding-left: 5.5rem;
}
</style>
