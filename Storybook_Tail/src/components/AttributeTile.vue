<template>
  <div class="containerCard">
    <div class="row1">
      <div class="row2">
        <div class="location">{{ location }}</div>
        <Pills :type="type" :label="label" class="att-pill" />
      </div>
      <Heart />
    </div>

    <div class="grid">
      <Attribute
        title="Delivery"
        tooltip="Method of course delivery."
        content="On campus"
        selectedSvgName="onCampus"
      />
      <Attribute
        title="Schedule"
        tooltip="Pace and number of hours."
        content="Part Time"
        selectedSvgName="schedule"
      />
      <Attribute
        title="Duration"
        tooltip="Total time required to complete a course."
        content="6 months"
        selectedSvgName="duration"
      />
      <Attribute
        title="Start date"
        tooltip="First day of attendance online or on campus."
        content="Next intake"
        selectedSvgName="startDate"
      />
      <Attribute
        tooltip="This is an indicative fee. The course fee depends on the subjects you choose to study."
        title="Fee Range"
        :content="content"
        :selectedSvgName="selectedSvgName"
      />
    </div>

    <div class="subtitle">{{ code }}</div>
  </div>
</template>

<script>
import Pills from './Pills.vue';
import Attribute from './Attribute.vue';
import Heart from './Heart.vue';

/** The attribute offerings card displays course offerings at a specific location, including related course information.*/
export default {
  components: { Pills, Attribute, Heart },
  props: {
    type: String,
    label: String,
    location: String,
    code: String,
    content: String,
    selectedSvgName: String,
  },
};
</script>

<style scoped>
.containerCard {
  max-width: 872px;
  border: 1px solid rgb(229, 231, 235);
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 300ms ease;
  background-color: #fff;
}
.containerCard:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.15),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: translateY(-1px);
  transition: all 300ms ease;
}
.row1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  align-items: center;
  justify-content: space-between;
}
.row2 {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
svg {
  margin-left: 1rem;
}
.location {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 1.5rem;
}

.subtitle {
  font-size: 14px;
  color: #4d4d4d;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .location {
    font-size: 20px;
  }
}

@media (max-width: 575px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .row2 {
    display: inline-block;
  }
  .att-pill {
    margin-top: 8px;
  }
  .location {
    font-size: 18px;
  }
}
</style>
