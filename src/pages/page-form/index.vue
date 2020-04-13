<template>
  <div class="fd-page-form">
    <h2>{{name}}</h2>
    <br/>
    <aty-form :data="formData" ref="form">
      <aty-row class="fd-row">
        <aty-col span='8' offset='8'>
          <aty-input label='案件编号' v-model="formData.ajbh" label-width="120"></aty-input>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-input label='行政执法主体名称' v-model="formData.xzzfztmc" label-width="120"></aty-input>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-input label='案件程序类型' v-model="formData.ajcxlx" label-width="120"></aty-input>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-textarea label='文本域默认' v-model="formData.textarea1" label-width="120" rows="5"></aty-textarea>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-input label='检查案件编号' v-model="formData.jcajbh" label-width="120"></aty-input>
        </aty-col>
        <aty-col span='24'>
          <aty-date-picker label='期间日期' v-model="formData.qjrq" placeholder="选择日期" style="width: 33.33%" label-width="120"></aty-date-picker>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-textarea label='文本域默认' v-model="formData.textarea2" label-width="120" rows="5"></aty-textarea>
        </aty-col>
        <aty-col span='8' offset='8'>
          <aty-radio-group label="重大案件：" v-model="formData.zdaj" :data-list="zdajData" label-width="120"/>
        </aty-col>
        <aty-col>
          <span name="提交"/>
        </aty-col>
      </aty-row>
      <aty-form-item style="text-align: center;">
          <aty-button type="primary" text="提交" @click="submit('form')"></aty-button>
          <aty-button type="ghost" text="保存" @click="save('form')"></aty-button>
      </aty-form-item>
    </aty-form>
  </div>
</template>

<script src="./index.js"></script>
