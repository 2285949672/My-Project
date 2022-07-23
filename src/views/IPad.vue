<template>
    <div class="ipadpro">
        <div class="ipad-top">为高校生活购买 iPad，以 Apple 教育优惠节省更多，另有 AirPods 搭配其中<a href="#">立即选购 ></a></div>
        <!-- 内容1 -->
        <div class="ipadair1">
            <div class="ipadair-title">
                <span>新款</span>
                <h2><img src="./img/air.png" alt=""></h2>
                <h3>轻，靓，重量级。</h3>
                <p>RMB 4399 起</p>
                <el-button type="primary" round>购买</el-button> <br/>
                <a href="#">进一步了解 ></a>
            </div>
            <div class="ipadair-bg"></div>
        </div>
        <!-- 内容2 -->
        <div class="ipad-pro">
            <div class="ipadpro-title">
                <h2>iPad Pro</h2>
                <h3>终极 iPad 体验</h3>
                <p>RMB 6199 起</p>
                <el-button type="primary" round>购买</el-button> <a href="#">进一步了解 ></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ipad'
    }
</script>

<style lang="css" scoped>
.ipadpro{
    width: 100%;
    background: #f5f5f7;
    
}
/* ipad顶部样式 */
.ipad-top{
    width: 100%;
    height: 44px;
    margin: auto;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    background-color: #f5f5f7; ;
}
.ipad-top a{
    text-decoration: none;
}
.ipad-top a:hover{
    text-decoration: underline;
}
/* 内容1样式 */
.ipadair1{
  width: 100%;
  height: 750px;
  background: #000;
  padding: 90px;
  text-align: center;
  background-image: url(./img/ipadair1.jpg);
  background-repeat: no-repeat;
  background-position: 900px;
}
.ipadair-title{
    margin-right: 500px;
    margin-top: 145px;
}
.ipadair-title span{
  font-size: 12px;
  font-weight: 600;
  color: #f56300;
}
.ipadair-title h2{
    margin-top: 20px;
}
.ipadair-title h2 img{
  width: 180px;
  height: 50px;
}
.ipadair-title h3{
  font-size: 19px;
  font-weight: 600;
  color: #fff;
}
.ipadair-title p{
  font-size: 17px;
  font-weight: 400;
  color: #fff;
}
.ipadair-title .el-button{
    margin-bottom: 10px;
}
.ipadair-title a{
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  color: #2997ff;
  margin-left: 10px;
}
.ipadair-title a:hover{
  text-decoration: underline;
}

/* 内容2样式2 */
.ipad-pro{
  width: 100%;
  height: 663px;
  background: #fff;
  padding: 25px;
  text-align: center;
  margin-top: 10px;
  background-image: url(./img/ipad-pro.jpg);
  background-repeat: no-repeat;
  background-position: right;
}
.ipadpro-title{
    margin-top: 100px;
   margin-left: 100px;
}
.ipadpro-title h2{
  font-size: 56px;
  font-weight: 600px;
}
.ipadpro-title h3{
  font-size: 28px;
  font-weight: 600;
}
.ipadpro-title p{
  font-size: 17px;
  font-weight: 400;
}
.ipadpro-title a{
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  margin-left: 20px;
}
.ipadpro-title a:hover{
  text-decoration: underline;
}

</style>