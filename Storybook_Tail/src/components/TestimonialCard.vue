<template>
  <div class="test-card">
    <div
      :style="{
        background: `url(${getImageUrlByName(
          image
        )}) no-repeat center top/cover`,
      }"
      class="testimonial-img"
    ></div>
    <div class="content-card">
      <div class="heading">{{ heading }}</div>
      <div class="subheading">{{ subheading }}</div>
      <div class="content-content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
import lady1 from '../stories/assets/testimonial.png';
import lady2 from '../stories/assets/Eun-Ah-Kung.jpg';
export default {
  props: {
    heading: String,
    subheading: String,
    content: String,
    image: String,
  },
  methods: {
    getImageUrlByName(imageName) {
      // Create a mapping of image names to URLs
      const imageUrls = {
        lady1: lady1,
        lady2: lady2,
        // Add more image names and URLs as needed
      };
      return imageUrls[imageName] || lady1;
    },
  },
};
</script>

<style scoped>
.test-card {
  max-width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d1d2d4;
  padding: 1.25rem;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.testimonial-img {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: #fff;
  border: 6px solid #e2e2e2;
}

.content-card {
  margin-top: 0.62rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: #000;
}
.subheading {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  color: #4d4d4d;
}
.content-content {
  text-align: center;
  margin-top: 1rem;
  max-width: 15rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
</style>
