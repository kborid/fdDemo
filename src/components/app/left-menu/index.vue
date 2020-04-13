<template>
    <div class="left-menu">
      <ul>
        <li @click="clickGoto('/one')">第一页</li>
        <li @click="clickGoto('/two')">第二页</li>
        <li @click="clickGoto('/three')">第三页</li>
        <li @click="clickGoto('/form')">基础表单</li>
        <li @click="clickGoto('/table')">标准表格</li>
      </ul>
      <button @click="close">{{value}}</button>
    </div>
</template>

<script src="./index.js"></script>
