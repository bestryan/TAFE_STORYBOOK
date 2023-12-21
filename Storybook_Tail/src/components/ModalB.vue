<template>
  <div class="w-[35rem] h-[29rem] shadow-xl">
    <div class="border-t-8 border-tafe-controls-red">
      <div
        class="my-6 py-2 px-8 text-center text-[1.75rem] font-bold text-tafe-controls-red"
      >
        Reject offer
      </div>

      <div class="my-6 px-8 text-center">
        <div>
          {{ content }}
        </div>
        <div class="my-4 text-xl font-bold">
          Bachelor of Property Valuation<br />
          Ultimo | 12/04/24 - 26/11/26
        </div>
        <div>
          You may not be eligible to gain another place into this course. If you
          reject this offer we will offer this place to another student on the
          waitlist. If you continue now and have a change of mind, please call
          <a href="#" class="underline text-tafe-blue-500">Student Services</a>.
          We can not guarantee there will still be places available.
        </div>
      </div>

      <!-- button -->
      <div class="flex justify-center gap-6 mt-10 my-6">
        <Button class="w-[6.8rem]" secondary label="Cancel" />
        <Button class="w-[6.8rem]" red label="Reject" />
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
    content: String,
  },
};
</script>

<style></style>
