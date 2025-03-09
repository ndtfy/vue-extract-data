<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '20vh'
  }
});

const { width, height } = toRefs(props);

</script>

<template>
  <div class="table" :style="`; width: ${width}; height: ${height}`">
    <div class="table-cell">
      <div class="bar">
        <slot name="bar1" />
      </div>
      <div class="pane">
        <slot name="pane1" />
      </div>
    </div>
    <div class="table-cell">
      <div class="bar">
        <slot name="bar2" />
      </div>
      <div class="pane">
        <slot name="pane2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .table {
    display: table;
    /*width: v-bind('width');*/
    /*height: v-bind('height');*/
  }
  .table-cell {
    position: relative;
    display: table-cell;
    vertical-align: top;
    border: 1px solid #77f;
    /*min-width: 200px;*/
    overflow: overlay;
  }
  .table-cell:first-child {
    width: 50%;
    resize: both;
  }
  .bar {
    display: flex;
    justify-content: start;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #ddd;
    gap: 4px;
  }
  .bar:has(*) {
    border: 4px solid transparent;
  }
  .pane {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 8px;
  }
</style>
