<template>
    <div class="shop">
        <div class="shop-top">符合条件的情况下可享分期付款。<a href="#">进一步了解 ></a></div>
        <h2><span>上新了,</span>快来认识一下这些新朋友。</h2>
        <!-- 第一个模块 -->
        <div class="content-1">
            <el-row :gutter="5" class="c-row">
                <!-- 卡片1 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card1">
                        <h2>MACBOOK PRO 13 英寸</h2>
                        <h3>超机动，硬实力。 </h3>
                        <span>RMB 9999 起</span>
                    </div>
                </el-col>
                <!-- 卡片2 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card2">
                        <h2>APPLE 独家优惠</h2>
                        <h3>为高校生活购买 Mac 或<br/> iPad，节省更多。 </h3>
                        <span>以教育优惠选购**，另有 AirPods 搭配其中。</span>
                    </div>
                </el-col>
                <!-- 卡片3 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card3">
                        <h2>IPHONE 13</h2>
                        <h3>解锁超能力 </h3>
                        <span>现有绿色外观可选。RMB 5199 起，还可折抵换<br/>购。</span>
                    </div>
                </el-col>
                <!-- 卡片4 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card4">
                        <h2>MACBOOK AIR (M2 芯片机型)</h2>
                        <h3>别看轻，别轻看。 </h3>
                        <span>RMB 9499 起</span>
                    </div>
                </el-col>
                <!-- 卡片5 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card5">
                        <h2>IPHONE 13 PRO</h2>
                        <h3>强得很</h3>
                        <span>现有苍岭绿色外观可选。RMB 7999起，还可折<br/>抵换购。</span>
                    </div>
                </el-col>
                <!-- 卡片6 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card6">
                        <h2>APPLE WATCH 表带</h2>
                        <h3>来点颜色抢抢眼 </h3>
                        <span>新款式，新配色，欢迎选购新表带。</span>
                    </div>
                </el-col>
                <!-- 卡片7 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card7">
                        <h2>IPAD AIR</h2>
                        <h3>轻，靓，重量级。 </h3>
                        <span>RMB 4399 起</span>
                    </div>
                </el-col>
                <!-- 卡片8 -->
                <el-col :span="6">
                    <div class="grid-content bg-purple card8">
                        <h2>IPHONE SE</h2>
                        <h3>重磅实力，轻松入手。 </h3>
                        <span>RMB 3499 起，还可折抵换购</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>

<script>

    export default {
        name:'Shop',
    }
</script>

<style lang="css" scoped>
.shop{
    width: 100%;
    text-align: center;
    background: #f5f5f7;
}
/* 商店顶部样式 */
.shop-top{
    width: 100%;
    height: 44px;
    margin: auto;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    background-color:#fff ;
}
.shop-top a{
    text-decoration: none;
}
.shop-top a:hover{
    text-decoration: underline;
}
.shop h2{
    font-size: 28px;
    font-weight: 600;
    padding-top: 20px;
    color: #ccc;
}
.shop span{
    color: #000;
}
/* 模块1的样式 */
.content-1{
    width: 100%;
}
.c-row{
    margin-left:55px !important;
}
/* 卡片1的样式 */
.card1{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card1.jpg);
    padding-top: 50px;
}
.card1 h2{
    color: #f5f5f7;
    font-size: 12px;
}
.card1 h3{
    color: #fff;
    font-size: 28px;
    font-weight: 600;
}
.card1 span{
    color: #fff;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片2的样式 */
.card2{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card2.jpg);
    padding-top: 50px;
}
.card2 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card2 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card2 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片3的样式 */
.card3{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card3.jpg);
    padding-top: 50px;
}
.card3 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card3 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card3 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片4的样式 */
.card4{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card4.jpg);
    padding-top: 50px;
}
.card4 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card4 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card4 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片5的样式 */
.card5{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card5.jpg);
    padding-top: 50px;
    margin-top: 20px;
}
.card5 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card5 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card5 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片6的样式 */
.card6{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card6.jpg);
    padding-top: 50px;
    margin-top: 20px;
}
.card6 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card6 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card6 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片7的样式 */
.card7{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card7.jpg);
    padding-top: 50px;
    margin-top: 20px;
}
.card7 h2{
    color: #f5f5f7;
    font-size: 12px;
}
.card7 h3{
    color: #fff;
    font-size: 28px;
    font-weight: 600;
}
.card7 span{
    color: #fff;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片8的样式 */
.card8{
    width: 400px;
    height: 500px;
    border-radius: 18px;
    background: url(./img/card8.jpg);
    padding-top: 50px;
    margin-top: 20px;
}
.card8 h2{
    font-size: 12px;
    color: #6e6e73;
}
.card8 h3{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}
.card8 span{
    color: #000;
    font-size: 17px;
    font-weight: 400;
}
/* 卡片鼠标悬停动画 */
.grid-content{
    cursor: pointer;
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
}
.grid-content:hover{
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    -moz-transform: translate(-2px,-2px);
    -webkit-transform: translate(-2px,-2px);
    -o-transform: translate(-2px,-2px);
    -ms-transform: translate(-2px, -2px);
    transform: translate(-2px,-2px);
    -webkit-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
    -moz-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
    -o-box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
    box-shadow: 5px 5px 15px rgba(67, 72, 84, 0.5);
}
</style>