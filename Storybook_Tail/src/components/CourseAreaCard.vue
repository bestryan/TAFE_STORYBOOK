<template>
  <div class="border">
    <div class="course-img"></div>
    <div class="course-container">
      <div class="course-box">
        <div>
          <div class="heading">{{ heading }}</div>
          <div class="subheading">{{ subheading }}</div>
        </div>
        <Heart />
      </div>
      <div class="content-content">{{ content }}</div>
      <div><Button label="Button" primary /></div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Heart from './Heart.vue';
export default {
  components: { Button, Heart },
  props: {
    heading: String,
    subheading: String,
    content: String,
  },
};
</script>

<style scoped>
.border {
  max-width: 18.5rem;
  border: 1px solid #d1d2d4;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
}

.border:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.15),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: translateY(-5px);
  transition: all 300ms ease;
}
.course-img {
  max-width: 18.5rem;
  height: 10.5rem;
  background: url('../stories/assets/kid.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.course-container {
  padding: 1.5rem;
  border-top: 6px solid var(--course-aqua-300, #26afaf);
}
.course-box {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.heading {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: #000;
}
.subheading {
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  color: #4d4d4d;
}
.content-content {
  margin-top: 1rem;
  max-width: 15rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 1rem;
}
</style>
