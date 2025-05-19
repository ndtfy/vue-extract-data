<script setup>

import { ref } from 'vue'

const status = ref('');

function onClick1() { console.log(import.meta.env); }

</script>

<template>
  <footer>
    <i @click="onClick1">&ensp;</i>
    <i class="truncate mr-auto">{{ status }}</i>
    <div></div>
    <i>&ensp;</i>
  </footer>
</template>

<style>
  :root {
    --navbar-bottom-bg-color: #ecf3fe;
  }
  :root.dark {
    --navbar-bottom-bg-color: #3c3c3c;
  }
</style>

<style scoped>
  footer {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 4px 4px;
    z-index: 100;
    background-color: var(--navbar-bottom-bg-color);
  }
</style>
