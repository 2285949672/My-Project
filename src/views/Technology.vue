<template>
    <div class="Technology">
        <!-- 样式 -->
        <div class="Technology-banner">
            <h2>Apple 支持</h2>
        </div>
        <!-- 内容 -->
        <div class="content">
            <div class="content1">
                <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/iphone1.png" alt="">iPhone</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/mac1.png" alt="">Mac</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/ipad1.png" alt="">iPad</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/watch1.png" alt="">Watch</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/air1.png" alt="">AirPods</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><img src="./img/music.png" alt="">Music</div></el-col>
                </el-row>
            </div>
        </div>
        <!-- 维修 -->
        <div class="promo">
            <div class="promo-content">
                <el-row>
                    <el-col :span="8"><div class="grid-content bg-purple"><img src="./img/pormo1.png" alt=""><br/><a href="#">忘记了 Apple ID 或密码 ></a></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"><img src="./img/promo2.png" alt=""><br/><a href="#">Apple 维修 ></a></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple1"><img src="./img/promo3.png" alt=""><br/><a href="#">账单和订阅 ></a></div></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Technology'
    }
</script>

<style lang="css" scoped>
/* 焦点图样式 */
.Technology-banner{
    width: 100%;
    height: 600px;
    background: url(./img/te1.jpg);
    background-size: 1950px;
    background-repeat: no-repeat;
    text-align: center;
}
.Technology-banner h2{
    font-size: 48px;
    font-weight: 600;
    color: #fff;
    padding-top: 150px;
}
/* 内容样式 */
.content{
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.content1{
    width: 1024px;
    height: 250px;

    padding-top: 50px;
    margin-left: 500px;
}
.content1 img{
    width: 68px;
    height: 78px;
    margin-bottom: 10px;
}

.content1 .bg-purple{
    width: 68px;
    height: 84px;
    text-align: center;
}
/* 维修内容样式 */
.promo{
    width: 100%;
    height: 170px;
    border-bottom: 1px solid #ccc;
}
.promo-content{
    width: 980px;
    height: 80px;
    margin: auto;
}
.promo-content .el-row{
    padding-top: 50px;
    margin-left: 20px;
}
.promo-content img{
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}
.promo-content .bg-purple{
    border-right: 1px solid #ccc;
    text-align: center;
}
.promo-content .bg-purple a{
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
}
.promo-content .bg-purple a:hover{
    text-decoration: underline;
}
.promo-content .bg-purple1{

    text-align: center;
}
.promo-content .bg-purple1 a{
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
}
.promo-content .bg-purple1 a:hover{
    text-decoration: underline;
}
</style>