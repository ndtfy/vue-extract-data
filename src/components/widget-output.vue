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
})

const { output, prompt } = toRefs(props)

</script>

<template>
  <div>
    <ol>
      <li v-for="val in output">{{ val }}</li>
    </ol>
    <i v-if="!output.length">{{ prompt }}</i>
  </div>
</template>

<style scoped>
  ol {
    font-size: small;
    font-family: monospace;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;

    max-height: 40vh;
    overflow-y: auto;
  }
  ol li::marker {
    color: blue;
  }
  i {
    color: gray;
  }
</style>
