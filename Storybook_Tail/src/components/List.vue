<template>
  <ul :class="listStyleClass">
    <li v-for="(item, index) in items" :key="index">
      <div class="box">
        <div class="list-marker number" v-show="isNumbered">
          {{ index + 1 + '.' }}
        </div>
        <span class="list-marker square" v-show="!isNumbered">
          <div class="sq" :style="{ background: colour }"></div>
        </span>
        <div class="list-text">{{ item }}</div>
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
    colour: { type: String, default: '#3b80d0' },
  },
  computed: {
    listStyleClass() {
      return this.isNumbered ? 'numbered-list' : 'dotted-list';
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.numbered-list {
  list-style-type: none;
  padding-left: 0.5rem;
}
.numbered-list .list-marker.number {
  margin-right: 0.62rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.numbered-list .list-marker.square {
  display: block;
}

.dotted-list {
  list-style-type: none;
  padding-left: 0.6rem;
}

.dotted-list .list-marker.number {
  display: none;
}
.sq {
  width: 0.5rem;
  height: 0.5rem;
}

.dotted-list .list-marker.square {
  margin-right: 0.85rem;
}

.list-text {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

@media (max-width: 768px) {
  .list-text,
  .numbered-list .list-marker.number {
    font-size: 0.875rem;
  }
}

@media (max-width: 575px) {
  .list-text,
  .numbered-list .list-marker.number {
    font-size: 0.75rem;
  }
  .sq {
    width: 0.375rem;
    height: 0.375rem;
  }
}
</style>
