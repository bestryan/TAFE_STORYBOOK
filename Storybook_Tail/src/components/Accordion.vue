<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div
        class="accordion-header"
        @click="toggleItem(index)"
        :class="{ active: activeItem === index }"
      >
        <div>
          {{ item.title }}
        </div>
        <div class="inline-flex">
          <span class="courseCode">{{ item.courseCode }}</span>
          <span>
            <svg
              class="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              :class="{ rotate: activeItem === index }"
            >
              <path
                d="M3.16406 8.08594L2.08594 9.16406L11.4609 18.5391L12 19.0547L12.5391 18.5391L21.9141 9.16406L20.8359 8.08594L12 16.9219L3.16406 8.08594Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>

      <div class="accordion-content" v-show="activeItem === index">
        <div class="courseCodeTwo">{{ item.courseCode }}</div>
        {{ item.content }}
      </div>
      <div class="location" v-show="activeItem === index">
        {{ item.locationTitle }}
        <b
          ><u>{{ item.location }}</u></b
        >
      </div>
    </div>
  </div>
</template>

<script>
/** An accordion is a vertically stacked list of headers that reveal or hide associated sections of content. */
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    toggleItem(index) {
      if (this.activeItem === index) {
        // If the clicked item is already active, collapse it
        this.activeItem = null;
      } else {
        // Expand the clicked item
        this.activeItem = index;
      }
    },
  },
};
</script>

<style scoped>
/* Add your accordion styling here */
.accordion-item {
  background-color: #fff;
  border: 1px solid #d1d2d4;
  margin-bottom: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.04),
    0px 4px 6px -2px rgba(0, 0, 0, 0.1);
}
.courseCode {
  margin-right: 1rem;
  color: #676769;
}

.courseCodeTwo {
  display: none;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  color: #676769;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

.accordion-header {
  background-color: #fff;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
}

.accordion-header.active {
  background-color: #fff;
}

.arrow {
  transition: transform 0.2s ease-in-out;
}

.rotate {
  transform: rotate(180deg);
}

.accordion-content {
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 0 1rem 1rem 1rem;
}
.location {
  color: #4d4d4d;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 0 1rem 1rem 1rem;
}

@media (max-width: 768px) {
  .courseCodeTwo {
    display: block;
  }
  .courseCode {
    display: none;
  }
}
</style>
