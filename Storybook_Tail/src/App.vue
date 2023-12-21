<template>
  <h1 class="text-3xl mb-4 font-bold underlin">Hello World!</h1>
  <h5 class="mb-28">Enrol Modals</h5>
  <ModalA />
</template>

<script>
import ModalA from './components/ModalA.vue';

export default {
  components: { ModalA },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
