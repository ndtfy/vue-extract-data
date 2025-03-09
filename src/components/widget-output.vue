<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  output: {
    required: true
  },
  prompt: {
    type: String,
    default: ''
  }
});

const { output, prompt } = toRefs(props);

</script>

<template>
  <i v-if="!output.length">{{ prompt }}</i>
  <div>
    <ol>
      <li v-for="val in output">{{ val }}</li>
    </ol>
  </div>
</template>

<style scoped>
  div {
    flex-grow: 1;
    overflow-y: auto;
    max-height: 30vh;
  }
  ol {
    box-sizing: border-box;
    font-size: small;
    font-family: monospace;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
  ol li::marker {
    color: blue;
  }
</style>
