<template>
  <div class="Mac">
    <div class="Mac-top">为高校生活购买 Mac，以 Apple 教育优惠节省更多，，另有 AirPods 搭配其中。<a href="#">立即选购 ></a></div>
    <!-- 内容1 -->
    <div class="MacBook">
      <div class="MacBook-title">
        <span>新款</span>
        <h2>MacBooK Air</h2>
        <h3>别看轻，别轻看。</h3>
        <p>RMB 9499 起</p>
        <el-button type="primary" round>购买</el-button> <a href="#">进一步了解 ></a>
      </div>
      <!-- 内容1背景图片 -->
      <div class="MacBook-bg"></div>
    </div>
    <!-- 内容2 -->
    <div class="MacBookPro">
      <div class="MacBookPro-title">
        <span>新款</span>
        <h2>13 英寸 MacBooK Pro</h2>
        <h3>超机动，硬实力。</h3>
        <p>RMB 9999 起</p>
        <el-button type="primary" round>购买</el-button> <a href="#">进一步了解 ></a>
      </div>
      <!-- 内容2背景图片 -->
      <div class="MacBookPro-bg"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Mac'
  }
</script>

<style lang="css" scoped>
.Mac{
  width: 100%;
  background: #f5f5f7;
}
/* mac顶部样式 */
.Mac-top{
    width: 100%;
    height: 44px;
    margin: auto;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    background-color:#f5f5f7 ;
}
.Mac-top a{
    text-decoration: none;
}
.Mac-top a:hover{
    text-decoration: underline;
}
/* 内容1的样式 */
.MacBook{
  width: 100%;
  height: 663px;
  background: #fff;
  padding: 25px;
  text-align: center;
}
.MacBook span{
  font-size: 17px;
  font-weight: 600;
  color: #f56300;
}
.MacBook h2{
  font-size: 56px;
  font-weight: 600px;
}
.MacBook h3{
  font-size: 28px;
  font-weight: 600;
}
.MacBook p{
  font-size: 17px;
  font-weight: 400;
}
.MacBook a{
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  margin-left: 20px;
}
.MacBook a:hover{
  text-decoration: underline;
}
.MacBook-bg{
  width: 571px;
  height: 369px;
  background: url(./img/MacBook.jpg) no-repeat;
  background-position: center;
  margin: auto;
  margin-top: 20px;
}
/* 内容2的样式 */
.MacBookPro{
  width: 100%;
  height: 750px;
  background: #000;
  padding: 90px;
  text-align: center;
  margin-top: 10px;
}
.MacBookPro span{
  font-size: 17px;
  font-weight: 600;
  color: #f56300;
}
.MacBookPro h2{
  font-size: 56px;
  font-weight: 600px;
  color: #fff;
}
.MacBookPro h3{
  font-size: 28px;
  font-weight: 600;
  color: #fff;
}
.MacBookPro p{
  font-size: 17px;
  font-weight: 400;
  color: #fff;
}
.MacBookPro a{
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
}
.MacBookPro a:hover{
  text-decoration: underline;
}
.MacBookPro-bg{
  width: 100%;
  height: 369px;
  background: url(./img/MacBookPro.jpg) no-repeat;
  background-position: center;
  margin: auto;
  margin-top: 50px;
}
</style>
