<template>
  <div :class="['lg:flex', type]">
    <img
      class="object-cover object-center lg:w-1/2"
      src="../stories/assets/twofemalestudents.png"
      alt="DCE-Showcase-Facilities"
    />
    <div class="pt-9 lg:pt-0 lg:px-12 lg:w-1/2">
      <div
        class="w-fit text-[1.75rem] lg:text-[2rem] font-bold mb-6 border-b-4 border-tafe-aqua-300"
      >
        {{ heading }}
      </div>
      <div class="text-base mb-8">
        {{ description }}
      </div>

      <div v-if="form_visible">
        <Input
          label="* First name"
          placeholder="Placeholder text"
          type="text"
        />
        <Input label="* Last name" placeholder="Placeholder text" type="text" />
        <Input
          label="* Email address"
          placeholder="Placeholder text"
          type="email"
        />
        <Input
          label="* Mobile phone"
          placeholder="Placeholder text"
          type="number"
        />
        <div class="mt-6">
          <Radio
            title="* How do you want to study?"
            name="name"
            :options="options"
          />
        </div>
        <div class="mt-6">
          <Checkbox :options="subscribe" />
        </div>
      </div>

      <div v-if="button_visible" class="mt-6">
        <Button primary :label="label" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import Input from './input.vue';
import Radio from './Radio.vue';
import Checkbox from './Checkbox.vue';
export default {
  components: { Button, Input, Radio, Checkbox },
  props: {
    type: String,
    label: String,
    heading: String,
    description: String,
    button_visible: Boolean,
    form_visible: Boolean,
  },
  data() {
    return {
      options: [
        { label: 'Study online', value: 'online' },
        { label: 'Study on campus', value: 'campus' },
      ],
      subscribe: [
        {
          label: 'Keep me informed of TAFE NSW news, events and marketing',
          value: 'subscribe',
        },
      ],
    };
  },
};
</script>

<style scoped>
.right {
  flex-direction: row-reverse;
}
</style>
