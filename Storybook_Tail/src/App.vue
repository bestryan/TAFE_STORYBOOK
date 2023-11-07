<template>
  <h1 class="text-3xl font-bold underlin">Hello world!</h1>
  <h5>Piils</h5>
  <Pills type="blue" label="Waitlist open" />
  <h5>Course Card</h5>
  <AccordionCourse title="Entry Requirements" :items="listOne" />
  <AccordionCourse title="Career Pathways" :items="listTwo" />
  <h3 class="text-xl">Course Card</h3>
  <CourseCard :listOne="listOne" :listTwo="listTwo" type="mobile" />
</template>

<script>
import Pills from './components/Pills.vue';
import AccordionCourse from './components/AccordionCourse.vue';
import CourseCard from './components/CourseCard.vue';
export default {
  components: { Pills, AccordionCourse, CourseCard },
  data() {
    return {
      listOne: ['Lorem ipsum one', 'Lorem ipsum one', 'Lorem ipsum one'],
      listTwo: ['Lorem ipsum two', 'Lorem ipsum two', 'Lorem ipsum two'],
    };
  },
};
</script>

<style scoped></style>
