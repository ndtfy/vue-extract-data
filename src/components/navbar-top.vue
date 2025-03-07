<script setup>
</script>

<template>
  <header>
    <ul>
      <li><a href=".">Home</a></li>
      <!--li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
        <div class="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      </li-->
    </ul>
  </header>
</template>

<style scoped>
  header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #2f8f8f;
  }
  li {
    float: left;
  }
  li a,
  .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 12px 18px;
    text-decoration: none;
  }
  li a:hover,
  .dropdown:hover .dropbtn {
    background-color: #9f7fef;
  }
  .dropdown {
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #bfbfef;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content a {
    display: block;
    color: black;
    text-align: left;
    padding: 12px 18px;
    text-decoration: none;
  }
  .dropdown-content a:hover {
    background-color: #dfdfff;
  }
</style>
