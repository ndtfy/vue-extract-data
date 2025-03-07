<script setup>

import NavbarTop from '@/components/navbar-top.vue'
import NavbarBottom from '@/components/navbar-bottom.vue'
import WidgetExtractData from '@/components/widget-extract-data.vue'

</script>

<template>
  <div class="global">
    <NavbarTop />
    <main>
      <div class="widget">
        <h3>Convert raw data to list</h3>
        <WidgetExtractData />
      </div>
    </main>
    <NavbarBottom />
  </div>
</template>

<style scoped>
  .global {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    flex-grow: 1;
    padding: 10px;
    background-color: whitesmoke;
  }
  .widget {
    padding: 10px;
    background-color: white;
  }
</style>
