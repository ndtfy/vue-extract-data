<script setup>

import { ref, reactive } from 'vue'

import WidgetSwitchTheme from '@/components/widget-switch-theme.vue'

const envRef = reactive(import.meta.env);

const switchTheme = ref();

</script>

<template>
  <header>
    <ul>
      <li><a :href="envRef.VITE_HOME">Home</a></li>
    </ul>
    <WidgetSwitchTheme ref="switchTheme" />
  </header>
</template>

<style>
  :root {
    --navbar-top-color: #ffffff;
    --navbar-top-bg-color: #2f8f8f;
    --navbar-top-bg-color-hover: #9f7fef;
    --navbar-top-dropdown-color: #000000;
    --navbar-top-dropdown-bg-color: #bfbfef;
    --navbar-top-dropdown-bg-color-hover: #dfdfff;
  }
  :root.dark {
    --navbar-top-color: #ffffff;
    --navbar-top-bg-color: #2f8f8f;
    --navbar-top-bg-color-hover: #9f7fef;
    --navbar-top-dropdown-color: #000000;
    --navbar-top-dropdown-bg-color: #bfbfef;
    --navbar-top-dropdown-bg-color-hover: #dfdfff;
  }
</style>

<style scoped>
  header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px 16px;
    z-index: 100;
    background-color: var(--navbar-top-bg-color);
  }
  ul {
    flex-grow: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    float: left;
  }
  li a,
  .dropbtn {
    display: inline-block;
    text-align: center;
    padding: 12px 16px;
    text-decoration: none;
    color: var(--navbar-top-color);
  }
  li a:hover,
  .dropdown:hover .dropbtn {
    background-color: var(--navbar-top-bg-color-hover);
  }
  .dropdown {
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: var(--navbar-top-dropdown-bg-color);
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content a {
    display: block;
    text-align: left;
    padding: 12px 16px;
    text-decoration: none;
    color: var(--navbar-top-dropdown-color);
  }
  .dropdown-content a:hover {
    background-color: var(--navbar-top-dropdown-bg-color-hover);
  }
</style>
