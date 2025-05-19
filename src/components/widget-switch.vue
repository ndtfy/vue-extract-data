<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default() {
      return;
    }
  }
});

const { checked, onChange } = toRefs(props);

</script>

<template>
  <input type="checkbox" :checked @change="onChange" />
</template>

<style>
  :root {
    --widget-switch-bg-color: #d8d8d8;
    --widget-switch-checked-bg-color: #70a0f0;
  }
  :root.dark {
    --widget-switch-bg-color: #585858;
    --widget-switch-checked-bg-color: #07398d;
  }
</style>

<style scoped>
  input {
    position: relative;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    transition: background 0.09s ease-in-out;
    outline: none;
    background-color: var(--widget-switch-bg-color);
  }
  input:checked {
    background-color: var(--widget-switch-checked-bg-color);
  }
  input::after {
    position: absolute;
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: scale(0.8);
    left: 0;
    top: 0;
    transition: left 0.09s ease-in-out;
    box-shadow: 1px 1px #ccc;
    background-color: #fff;
  }
  input:checked::after{
    left: 30px;
  }
</style>
