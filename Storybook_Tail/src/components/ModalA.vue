<template>
  <div class="w-[25.5rem] h-[57rem] shadow-xl">
    <div class="border-t-8 border-tafe-controls-green">
      <div
        class="my-6 py-2 px-8 text-center leading-7 text-[1.375rem] font-bold text-tafe-controls-green"
      >
        Payment successful
      </div>
      <div class="flex justify-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
        >
          <g clip-path="url(#clip0_2871_15151)">
            <path
              d="M4.03446e-06 28.9944C0.00835737 12.9783 12.9672 0.0167227 28.9889 1.60188e-05C45.0161 -0.0166907 58.0557 13.0368 58 29.039C57.9443 45.0858 44.9744 58.0279 28.9777 58C12.956 57.9694 -0.0083493 44.9939 4.03446e-06 28.9944ZM29.0473 3.24111C14.8133 3.21048 3.27173 14.713 3.24388 28.9527C3.21882 43.1895 14.713 54.7255 28.9555 54.7561C43.1923 54.7868 54.7283 43.2898 54.7561 29.0446C54.784 14.7993 43.2981 3.27452 29.0473 3.24389V3.24111Z"
              fill="#12924D"
            />
            <path
              d="M24.2665 37.7236C24.8011 37.1612 25.2772 36.66 25.7506 36.1532C31.7316 29.774 37.7125 23.3949 43.688 17.0101C44.1195 16.5507 44.579 16.1804 45.2417 16.2416C45.8598 16.3001 46.3443 16.6064 46.5949 17.1939C46.8622 17.8232 46.7843 18.433 46.3276 18.9481C45.7262 19.6247 45.0969 20.2735 44.4787 20.9334C38.2277 27.6022 31.9794 34.2681 25.7283 40.9341C24.7231 42.0061 23.8237 42.0145 22.8352 40.9592C19.2322 37.1194 19.3046 37.2726 15.7098 33.4244C15.4453 33.1404 15.178 32.8258 15.0332 32.4722C14.7631 31.8095 15.0527 31.0326 15.6375 30.6289C16.2389 30.214 16.9963 30.2363 17.5754 30.704C17.7536 30.8488 17.9096 31.027 18.0683 31.1941C21.1479 34.4742 20.552 33.7642 23.6316 37.047C23.8209 37.2475 24.0131 37.448 24.272 37.7181L24.2665 37.7236Z"
              fill="#12924D"
            />
          </g>
          <defs>
            <clipPath id="clip0_2871_15151">
              <rect width="58" height="58" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div class="mt-4 mx-8">
        <!-- section one -->
        <div
          v-for="(list, index) in lists"
          :key="index"
          class="flex justify-between py-2"
        >
          <div>{{ list.title }}</div>
          <div>
            <b>{{ list.content }}</b>
          </div>
        </div>

        <!-- break line -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="344"
          height="2"
          viewBox="0 0 344 2"
          fill="none"
          class="my-4"
        >
          <path d="M0 1H345" stroke="black" />
        </svg>
        <!-- section two -->

        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex justify-between py-2"
        >
          <div>{{ item.title }}</div>
          <div>
            <b>{{ item.content }}</b>
          </div>
        </div>
      </div>

      <div class="my-6 px-8 text-center">
        <div class="mb-4">
          {{ content_one }}
        </div>
        <div>
          {{ content_two }}
        </div>
      </div>

      <!-- button -->
      <div class="flex justify-center gap-6 my-6">
        <Button class="w-[6.8rem]" secondary label="Print" />
        <Button class="w-[6.8rem]" primary label="Next step" />
      </div>
      <div class="flex justify-center mb-12">
        <Radio name="name" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Radio from './Radio.vue';
export default {
  components: { Button, Radio },
  props: {
    lists: Array,
    items: Array,
    content_one: String,
    content_two: String,
    options: Array,
  },
};
</script>

<style></style>
