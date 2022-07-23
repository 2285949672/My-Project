<template>
  <div id="app">
    <div class="nav">
      <el-breadcrumb separator="">
        <el-breadcrumb-item to="/"><img src="./img/apple.svg" alt=""></el-breadcrumb-item>
        <el-breadcrumb-item to="/shop">商店</el-breadcrumb-item>
        <el-breadcrumb-item to="/mac">Mac</el-breadcrumb-item>
        <el-breadcrumb-item to="/ipad">iPad</el-breadcrumb-item>
        <el-breadcrumb-item to="/iphone">iPhone</el-breadcrumb-item>
        <el-breadcrumb-item to="watch">Watch</el-breadcrumb-item>
        <el-breadcrumb-item to="airpods">AirPods</el-breadcrumb-item>
        <el-breadcrumb-item to="homepod">家居</el-breadcrumb-item>
        <el-breadcrumb-item to="parts">配件</el-breadcrumb-item>
        <el-breadcrumb-item to="technology">技术支持</el-breadcrumb-item>
        <el-breadcrumb-item class="search"></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

</script>
<style lang="css">
  .app{
    width: 100%;
  }
  .nav{
    width: 100%;
    background: rgba(0,0,0,0.8);
    
  }
  .el-breadcrumb{
    margin: 0 auto;
  }
  .el-breadcrumb__inner{
    color: #f5f5f7;
    padding: 0 18px;
    line-height: 44px;
    font-size:12px;
  }

  .el-breadcrumb__inner.is-link{
    color: #f5f5f7;
    font-weight: 400;
  }
</style>