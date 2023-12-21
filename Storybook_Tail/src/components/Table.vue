<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(course, index) in courses"
          :key="course.id"
          :class="{ 'striped-row': striped && index % 2 === 1 }"
        >
          <td>{{ course.title }}</td>
          <td>{{ course.location }}</td>
          <td>{{ course.duration }}</td>
          <td>{{ course.fee }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    courses: Array,
    headers: Array,
    striped: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  max-width: 52rem;
  min-width: 40rem;
}
.table th,
.table td {
  padding: 12px 8px;
  text-align: left;
  line-height: 1.5rem;
}
th {
  border-bottom: 0.125rem solid #000;
}
td {
  border-bottom: 0.0625rem solid #000;
}
.striped-row {
  background-color: #f2f2f2;
}
</style>
