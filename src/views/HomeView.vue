<template>
  <div class="home">
    <div class="homeview">
        <!-- 在线选购 -->
        <div class="home-top">
          <a href="#">在线选购</a>,享受免费送货、Specialist 专家支持、免息分期等服务。
        </div>
        <!-- 焦点图1 MacBook Air -->
        <div class="banner">
          <a href="#" class="banner-a"></a>
          <div class="banner-1">
            <h2>MacBook Air</h2>
            <h3 class="M2"></h3>
            <a href="#" class="m-1">进一步了解 ></a><a href="#" class="m-2">购买 ></a>
          </div>
        </div>
        <!-- 焦点图2 iPhone13 -->
        <div class="banner-2">
          <div class="banner-2title">
            <h2>iPhone 13</h2>
            <h3>解锁超能力</h3>
            <a href="#">进一步了解 ></a><a href="#">购买 ></a>
          </div>
        </div>
        <!-- 焦点图3 Mac&ipad -->
        <div class="banner-3">
          <div class="banner-3title">
            <h2>强势高校装备,<span>飙起来。</span></h2>
            <h3>买 Mac 或 iPad 有优惠,另有 AirPods 搭配其中。</h3>
            <a href="#">立即选购 ></a>
          </div>
        </div>
        <!-- 焦点图4和焦点图5 iPhone13Pro和Mac-->
        <div class="banner-4">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="iphone13pro">
                <div class="iphone-title">
                  <h2>iPhone 13 Pro</h2>
                  <h3>强得很</h3>
                  <a href="#">进一步了解 ></a><a href="#">购买 ></a>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="macpro">
                <div class="mac-title">
                  <h2>13 英寸 MacBook Pro</h2>
                  <h3><img src="./img/M2-1.png" alt=""></h3>
                  <a href="#">进一步了解 ></a><a href="#">购买 ></a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 焦点图6和焦点图7 Watch和ipad -->
        <div class="banner-5">
          <el-row :gutter="20">
              <el-col :span="12">
                <div class="watch">
                  <div class="watch-title">
                    <h2><img src="./img/watch7.png" alt=""></h2>
                    <h3>Apple Watch 扛得住。</h3>
                    <a href="#">进一步了解 ></a><a href="#">观看影片</a>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="ipad">
                  <div class="ipad-title">
                    <h2>iPad + Apple Pencil</h2>
                    <h3>手写笔记秀</h3>
                    <a href="#">马上入场 ></a>
                  </div>
                </div>
              </el-col>
          </el-row>
        </div>
        <!-- 焦点图8和焦点图9 ipadAir和studio Display -->
        <div class="banner-6">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="ipadair">
                <h2><img src="./img/air.png" alt=""></h2>
                <h3>轻,靓,重量级。</h3>
                <a href="#">进一步了解 ></a><a href="#">购买 ></a>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="studio">
                <h2>Studio Display</h2>
                <h3>眼界全开</h3>
                <a href="#">进一步了解 ></a><a href="#">购买 ></a>
              </div>
            </el-col>
          </el-row>
        </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

// 引入底部组件

export default {
  name: 'HomeView',
}
</script>
<style lang="css" scoped>
  .homeview{
    width: 100%;
  }
  .home-top{
    width: 100%;
    height: 44px;
    margin: auto;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    background-color:#f5f5f7 ;
  }
  .home-top a{
    text-decoration: none;
  }
  .home-top a:hover{
    text-decoration:underline;
  }
  /* 焦点图1模块的样式 */
  .banner{
    width: 100%;
    height: 580px;
    background: url(./img/MacBookAir.png) no-repeat;
    background-size:170% 580px;
    background-position: center;
    cursor: pointer;
  }
  .banner-a{
    width: 100%;
    height: 100%;
  }
  .banner-1{
    position: relative;
    top: 43%;
    left: 26%;
    
  }
  .banner-1 h2{
    font-size: 56px;
    font-weight: 600;
  }
  .M2{
    background: url('./img/m2.png') no-repeat;
    width: 100%;
    height: 41px;
  }
  .m-1{
    font-size: 21px;
    font-weight: 400px;
    text-decoration: none;
    color: #06c;
    position: relative;
    left: 1%;
  }
  .m-2{
    font-size: 21px;
    font-weight: 400px;
    text-decoration: none;
    color: #06c;
    position: relative;
    left: 1%;
  }
  .m-1:hover{
    text-decoration:underline;
  }
  .m-2:hover{
    text-decoration:underline;
  }
  /* 焦点图2模块的样式 */
  .banner-2{
    width: 100%;
    height: 650px;
    background: url(./img/iphone13.jpg) no-repeat;
    background-size: 170% 650px;
    background-position: center;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
  }
  .banner-2title{
    position: relative;
    top: 10%;
  }
  .banner-2title h2{
    font-size: 56px;
    font-weight: 600;
  }
  .banner-2title h3{
    font-size: 28px;
    font-weight: 400;
  }
  .banner-2title a{
    text-decoration: none;
    padding: 5px;
    font-size: 21px;
    font-weight: 400;
  }
  .banner-2title a:hover{
    text-decoration:underline;
  }
  /* 焦点图3模块的样式 */
  .banner-3{
    width: 100%;
    height: 650px;
    background: url(./img/Macipad.jpg) no-repeat;
    background-size: 170% 650px;
    background-position: center;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
  }
  .banner-3title{
    position: relative;
    top: 7%;
  }
  .banner-3title h2{
    font-size: 56px;
    font-weight: 600;
  }
  .banner-3title span{
    color: #ca2166;
  }
  .banner-3title h3{
    font-size: 28px;
    font-weight: 400;
  }
  .banner-3title a{
    text-decoration: none;
    padding: 5px;
    font-size: 21px;
    font-weight: 400;
  }
  .banner-3title a:hover{
    text-decoration:underline;
  }
  /* 焦点图4模块的样式 */
  .banner-4{
    margin-top: 20px;
  }
  /* iphone13 Pro的样式 */
  .iphone13pro{
    width: 100%;
    height: 580px;
    background: url(./img/iphone13pro.jpg);
    background-position: center;
    text-align: center;
    padding-top: 30px;
    cursor: pointer;
  }
  .iphone13pro h2{
    font-size: 40px;
    font-weight: 600;
  }
  .iphone13pro h3{
    font-size: 21px;
    font-weight: 400;
  }
  .iphone13pro a{
    text-decoration: none;
    padding: 5px;
    color: #06c;
  }
  .iphone13pro a:hover{
    text-decoration: underline;
  }
  /* Macpro的样式 */
  .macpro{
    width: 100%;
    height: 580px;
    background: url(./img/macpro.jpg);
    background-position: center;
    text-align: center;
    padding-top: 30px;
    cursor: pointer;
  }
  .macpro h2{
    color: #fff;
    font-size: 40px;
    font-weight: 600;
  }
  .macpro a{
    text-decoration: none;
    padding: 5px;
    color: #06c;
  }
  .macpro a:hover{
    text-decoration: underline;
  }
  /* 焦点图5模块的样式 */
  .banner-5{
    margin-top: 20px;
  }
  /* watch的样式 */
  .watch{
    width: 100%;
    height: 580px;
    background: url(./img/watch71.jpg);
    background-position: center;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
  }
  .watch h3{
    font-size: 21px;
    font-weight: 400;
    color: #fff;
  }
  .watch a{
    text-decoration: none;
    padding: 5px;
    color: #fff;
  }
  .watch a:hover{
    color: #fff;
    text-decoration: underline;
  }
  /* ipad的样式 */
  .ipad{
    width: 100%;
    height: 580px;
    background: url(./img/ipad.jpg);
    background-position: center;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
  }
  .ipad h2{
    font-size: 40px;
    font-weight: 600;
  }
  .ipad h3{
    font-size: 21px;
    font-weight: 400;
  }
  .ipad a{
    text-decoration: none;
    padding: 5px;
    color: #06c;
  }
  .ipad a:hover{
    text-decoration: underline;
  }
  /* 焦点图6模块的样式 */
  .banner-6{
    margin-top: 20px;
  }
  /* ipadair的样式 */
  .ipadair{
    width: 100%;
    height: 580px;
    background: url(./img/ipadair.jpg);
    background-position: center;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
  }
  .ipadair h3{
    font-size: 17px;
    font-weight: 400;
    color: #fff;
  }
  .ipadair a{
    text-decoration: none;
    padding: 5px;
  }
  .ipadair a:hover{
    text-decoration: underline;
  }
  /* studio Display */
  .studio{
    width: 100%;
    height: 580px;
    background: url(./img/studio.jpg);
    background-position: center;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
  }
  .studio h2{
    font-size: 40px;
    font-weight: 600;
  }
  .studio h3{
    font-size: 21px;
    font-weight: 400;
  }
  .studio a{
    text-decoration: none;
    padding: 5px;
    color: #06c;
  }
  .studio a:hover{
    text-decoration: underline;
  }
</style>
