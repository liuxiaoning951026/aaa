<template>
  <div class="hello">
    <h1 class="span_text">{{ msg }}</h1>
    <el-button type="primary" size="small">color001</el-button>
    <el-button type="primary" size="small">color002</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style lang="less" scoped>
.span_text {
  font-size: 30px;
  color: @color-primary;
}
</style> -->

<style lang="less" scoped>
.hello {
  .span_text {
    font-size: 30px;
    color: @color-primary;
  }
}
</style>
