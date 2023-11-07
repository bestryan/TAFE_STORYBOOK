<template>
  <div :class="['alert', type]">
    <div class="icon">
      <svg
        :class="['icon-svg', type]"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path :d="icon" fill="currentColor" />
      </svg>
    </div>

    <div>
      <div class="title">{{ title }}</div>
      <div class="message">
        {{ message }}
        <b
          ><u>{{ link }}</u></b
        >
      </div>
    </div>
  </div>
</template>

<script>
/** In-page notifications are used to contextually inform users of important information or status of an interaction. */
export default {
  props: {
    type: String,
    message: String,
    title: String,
    link: String,
    icon: String,
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  max-width: 53rem;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  align-items: flex-start;
  gap: 1rem;
}
b {
  cursor: pointer;
}
.information {
  background: rgba(22, 95, 180, 0.1);
  border-left: 6px solid var(--brand-blue-500, #165fb4);
  color: var(--brand-blue-500, #165fb4);
}
.success {
  color: var(--status-green, #1a8478);
  border-left: 6px solid var(--status-green, #1a8478);
  background: rgba(26, 132, 120, 0.1);
}

.error {
  color: var(--Web-Red, #b11030);
  border-left: 6px solid var(--status-red, #b11030);
  background: rgba(177, 16, 48, 0.1);
}

.title {
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.message {
  max-width: 47rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #000;
}

.icon-svg {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  background: none;
  border: none;
}

.icon-svg.success path {
  d: path(
    'M28.2812 6.28125L11 23.5625L3.71875 16.2812L2.28125 17.7188L10.2812 25.7188L11 26.4062L11.7188 25.7188L29.7188 7.71875L28.2812 6.28125Z'
  );
}

.icon-svg.error path {
  d: path(
    'M8.71875 7.28125L7.28125 8.71875L14.5625 16L7.28125 23.2812L8.71875 24.7188L16 17.4375L23.2812 24.7188L24.7188 23.2812L17.4375 16L24.7188 8.71875L23.2812 7.28125L16 14.5625L8.71875 7.28125Z'
  );
}

.icon-svg.information path {
  d: path(
    'M5 5V27H12.5625L15.2812 29.7188L16 30.4062L16.7188 29.7188L19.4375 27H27V5H5ZM7 7H25V25H18.5938L18.2812 25.2812L16 27.5625L13.7188 25.2812L13.4062 25H7V7ZM15 10V12H17V10H15ZM15 14V22H17V14H15Z'
  );
}
</style>
