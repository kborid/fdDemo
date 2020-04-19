<template>
  <div>
    <h2>{{name}}</h2>
    <div id="chart1"></div>
    <div style="display: flex;">
      <div id="chart2"></div>
      <div id="chart3"></div>
    </div>
    <div style="display: flex;">
      <div id="chart4"></div>
      <div id="chart5"></div>
      <div id="chart6"></div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
#chart1 {
  width: 100%;
  height: 200px;
}

#chart2 {
  flex: 7;
  height: 200px;
}

#chart3 {
  flex: 3;
  height: 200px;
}

#chart4 {
  flex: 1;
  height: 200px;
}

#chart5 {
  flex: 1;
  height: 200px;
}

#chart6 {
  flex: 1;
  height: 200px;
}
</style>
