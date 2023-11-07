<template>
  <div>
    <ol class="breadcrumb">
      <div class="small">
        <div class="namet font">
          <svg
            class="back-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="black"
          >
            <path
              d="M21.4062 4.21875L19.9496 2.78125L7.28292 15.2812L6.58625 16L7.28292 16.7188L19.9496 29.2188L21.4062 27.7812L9.46792 16L21.4062 4.21875Z"
              fill="black"
            />
          </svg>
          <div>
            <span v-if="breadcrumbs.length === 1">
              {{ 'Back to Home' }}
            </span>
            <span v-else>
              {{ 'Back to ' + breadcrumbs[breadcrumbs.length - 2].label }}
            </span>
          </div>
        </div>
      </div>
      <div class="breadcrumb-one">
        <svg class="home-icon" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 1.94531L11.4609 2.46094L1.71094 12.2109L2.78906 13.2891L3.75 12.3281V21H10.5V13.5H13.5V21H20.25V12.3281L21.2109 13.2891L22.2891 12.2109L12.5391 2.46094L12 1.94531ZM12 4.07812L18.75 10.8281V19.5H15V12H9V19.5H5.25V10.8281L12 4.07812Z"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="black"
          />
        </svg>
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
        >
          <div class="namet">
            <svg class="next-icon" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.39062 13.8906L6.10938 14.6094L12.3594 8.35938L12.7031 8L12.3594 7.64063L6.10938 1.39062L5.39063 2.10938L11.2813 8L5.39062 13.8906Z"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="black"
              />
            </svg>
            <a v-if="index < breadcrumbs.length - 1" @click="navigate(index)">{{
              crumb.label
            }}</a>
            <span v-else>{{ crumb.label }}</span>
          </div>
        </li>
      </div>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    breadcrumbs() {
      return this.items.map((item, index) => ({
        label: item.label,
        path: item.path,
      }));
    },
  },
  methods: {
    navigate(index) {
      this.$emit('navigate', index);
    },
  },
};
</script>

<style scoped>
/* Add your breadcrumb styling here */
.small {
  display: none;
}
.back-icon {
  display: none;
}

.namet {
  display: flex;
  align-items: center;
}

.breadcrumb {
  background-color: #3b80d0;
  padding: 0.625rem 1.5rem;
}
.breadcrumb-one {
  display: flex;
  align-items: baseline;
}
.font {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
}

.breadcrumb-item {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%;
}

.breadcrumb-item:last-child {
  font-weight: 400;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.home-icon {
  margin: 0 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
}
.back-icon {
  margin: 0 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
}
.next-icon {
  margin: 0 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
}
a:hover {
  text-decoration: underline;
  cursor: pointer;
}
@media (max-width: 768px) {
  .breadcrumb-item:last-child {
    display: show;
  }
  .breadcrumb-item {
    display: none;
  }
  .home-icon {
    display: none;
  }
  .back-icon {
    display: block;
  }
  .small {
    display: block;
  }
}
</style>
