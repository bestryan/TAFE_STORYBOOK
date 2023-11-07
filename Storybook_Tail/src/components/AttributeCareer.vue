<template>
  <div class="box" flex>
    <div class="career-info">
      <div class="h5-lns">{{ title }}</div>
      <div class="text-medium">{{ content }}</div>
    </div>
    <div class="career-grid">
      <Attribute
        title="Full-time share"
        tooltip="Full-time workers usually work 35 hours or more a week(in all their jobs combined)."
        content="97%"
        selectedSvgName="fullTime"
      />
      <Attribute
        title="Employment size"
        tooltip="Employment size is the number of worker who do this as their main job."
        content="1,400 workers"
        selectedSvgName="employment"
      />
      <Attribute
        title="Average age"
        tooltip="This is the average age of all workers in this job."
        content="33 years"
        selectedSvgName="startDate"
      />
      <Attribute
        title="Weekly pay"
        tooltip="Median earnings are shown for full-time, non-managerial employees paid at the adult rate, before tax or any amounts that are salary sacrificed. These figures are a guide to earnings only and should not be used to determine a wage rate."
        content="$1,600"
        selectedSvgName="weeklypay"
      />
      <Attribute
        title="Average full-time"
        tooltip="The average full-time hours that people in this role work each week."
        content="43 hours"
        selectedSvgName="duration"
      />
      <Attribute
        title="Skill level rating"
        tooltip="Skill level ratings are based on the range and complexity of job roles. In general, the higher the skill level, the more formal education and training, previous experience or on-the -job training needed to be good at the job."
        content="Medium"
        selectedSvgName="skillLevel"
      />
      <Attribute
        title="Gender share"
        tooltip=""
        content="5% female"
        selectedSvgName="gender"
      />
      <Attribute
        title="Future growth"
        tooltip="The Department of Employment, Skills, Small and Family Business estimates the likely change in number of workers in this role, or industry, over the next 5 years. Future growth is the likely percentage change compared to all other job roles."
        content="Stable"
        selectedSvgName="futureGrowth"
      />
    </div>
  </div>
</template>

<script>
import Attribute from './Attribute.vue';

/** The attribute career card is used to display a set of details related to a particular industry*/
export default {
  components: { Attribute },
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.box {
  max-width: 75rem;
  border: 1px solid #d1d2d4;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.06),
    0px 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  page-break-inside: avoid;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  @media (min-width: 640px) {
    flex-direction: row;
  }
}
.h5-lns {
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
}
.text-medium {
  margin-top: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}
.career-info {
  background-color: #f3f4f6;
  width: 22%;
  padding: 1.5rem;
}
.career-grid {
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem 1rem;
  flex-grow: 1;
}

@media (max-width: 640px) {
  .career-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .career-info {
    width: auto;
  }
}
</style>
