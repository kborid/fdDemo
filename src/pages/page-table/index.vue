<template>
  <div class="fd-page-table">
    <h2>{{name}}</h2>
    <br/>
    <aty-form :data="formData" ref="form">
        <aty-row>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.a" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.b" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.c" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.d" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.e" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.f" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-input label='输入框名称' v-model="formData.g" placeholder="默认文字"></aty-input>
          </aty-col>
          <aty-col span='6'>
            <aty-form-item style="text-align: right;">
              <aty-button type="primary" text="查询" @click="search('form')"></aty-button>
              <aty-button type="ghost" text="重置" @click="reset('form')"></aty-button>
            </aty-form-item>
          </aty-col>
        </aty-row>

        <aty-row>
          <aty-table :pageable-data="tableData" :page-size="50" :limit="50">
            <aty-table-column type="selection" reserve-selection></aty-table-column>
            <aty-table-column prop="title" label="标题"></aty-table-column>
            <aty-table-column prop="ly" label="来源"></aty-table-column>
            <aty-table-column prop="date" label="日期"></aty-table-column>
            <aty-table-column prop="price" label="价格（￥）"></aty-table-column>
            <aty-table-column prop="spend" label="加载用时"></aty-table-column>
            <aty-table-column prop="address" label="地址"></aty-table-column>
            <aty-table-column prop="state" label="状态"></aty-table-column>
            <aty-table-column label="操作"></aty-table-column>
          </aty-table>
        </aty-row>
      </aty-form>
  </div>
</template>

<script src="./index.js"></script>
