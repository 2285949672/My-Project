<template>
    <div class="AirPods">
        <div class="AirPods-top">购买 AirPods，Apple Music 免费试听六个月。<a href="#">进一步了解</a></div>
        <div class="AirPods1">
            <!-- 内容1 -->
            <div class="AirPods-content1">
                <div class="Airleft"><img src="./img/Airleft.png" alt=""></div>
                <div class="Airright"><img src="./img/Airright.png" alt=""></div>
                <div class="Airfont">
                    <h2>AirPods Pro</h2>
                    <span>RMB 1999</span>
                </div>
                <div class="Airfont1">
                    <el-button round>购买</el-button>
                    <a href="#">进一步了解 ></a>
                </div>
            </div>
            <!-- 内容2 -->
            <div class="AirPods-content2">
                <div class="Airpodsmax"><img src="./img/Airpodsmax.png" alt=""></div>
                <div class="Airpodsmax-font">
                    <h2>RMB 4399</h2>
                    <el-button type="primary" round>购买</el-button>
                    <a href="#">进一步了解 ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AirPods'
    }
</script>

<style lang="css" scoped>
.AirPods{
    width: 100%;
    background-color: #f5f5f7; 
}
/* AirPods顶部样式 */
.AirPods-top{
    width: 100%;
    height: 44px;
    margin: auto;
    text-align: center;
    line-height: 44px;
    font-size: 12px;
    background-color: #F8F8F9; 
}
.AirPods1{
    width: 100%;
    height: 1600px;
    background: #f5f5f7;
}
/* 内容1的样式 */
.AirPods-content1{
    width: 1520px;
    height: 704px;
    background-color: #000;
    margin: auto;
    margin-top: 50px;
    border-radius: 20px;
    text-align: center;
    text-shadow: 0 2px 50px rgb(0 0 0 / 48%);
}
/* 左耳机样式 */
.Airleft{
    display: block;
    position: absolute;
    margin-right: 56px;
    top: 20%;
    left: 26%;
}
/* 右耳机样式 */
.Airright{
    display: block;
    position: absolute;
    top: 20%;
    left: 51%;
}
/* 大文字样式 */
.Airfont{
    position: relative;
    padding-top: 220px;
}
.Airfont h2{
    font-size: 120px;
    font-weight: 600;
    color: #fff;
}
.Airfont span{
    font-size: 21px;
    font-weight: 400;
    color: #fff;
}
.Airfont1{
    position: relative;
    margin-top: 220px;
}
.Airfont1 .el-button{
    margin-right: 30px;
}
.Airfont1 a{
    text-decoration: none;
    color: #fff;
    font-weight: 400;
}
.Airfont1 a:hover{
    text-decoration: underline;
}
/* 内容2的样式 */
.AirPods-content2{
    width: 1520px;
    height: 740px;
    background-color: #fff;
    margin: auto;
    margin-top: 50px;
    border-radius: 20px;
    text-align: center;
    background-image: url(./img/Airpodsmaxbg.jpg);
    background-repeat: no-repeat;
    background-position: center;
}
.Airpodsmax{
    padding-top: 35px;
    margin: auto;
}
.Airpodsmax-font{
    position: absolute;
    left: 45%;
    margin: auto;
}
.Airpodsmax-font h2{
    font-size: 17px;
    font-weight: 400;
}
.Airpodsmax-font .el-button{
    margin-right: 20px;
}
.Airpodsmax-font a{
    text-decoration: none;
}
.Airpodsmax-font a:hover{
    text-decoration: underline;
}
</style>