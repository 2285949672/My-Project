<template>
    <div class="watch">
        <!-- 内容1 -->
        <div class="watch7">
            <div class="watch7-title">
                <h2><img src="./img/watch7logo.png" alt=""></h2>
                <h3>全屏先手</h3>
                <span>RMB 2999 起</span><br/>
                <el-button type="primary" round>购买</el-button><br/>
                <a href="#">进一步了解 ></a>
            </div>
        </div>
        <!-- 内容2 -->
        <div class="watchse">
            <div class="watchse-title">
                <h2><img src="./img/watchselog.png" alt=""></h2>
                <h3>全屏先手</h3>
                <span>RMB 2999 起</span><br/>
                <el-button type="primary" round>购买</el-button>
                <a href="#">进一步了解 ></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'watch'
    }
</script>

<style lang="css" scoped>
.watch{
    width: 100%;
    height: 2400px;
    background: #fff;
}
/* 内容1 */
.watch7{
    width: 100%;
    height: 1200px;
    background: #f5f5f7;
    background-image: url(./img/watch7img.jpg);
    background-repeat: no-repeat;
    background-position: bottom;
    text-align: center;
}
.watch7-title{
    padding-top: 70px;
}
.watch7-title h3{
   font-size: 48px;
   font-weight: 600;
}
.watch7-title span{
    font-size: 21px;
    font-weight: 400px;
}
.watch7-title .el-button{
    margin-top: 20px;
    margin-bottom: 20px;
}
.watch7-title a{
    font-size: 21px;
    font-weight: 400px;
    color: #06c;
    text-decoration: none;
    margin-left: 20px;
}
.watch7-title a:hover{
    text-decoration: underline;
}
/* 内容2的样式 */
.watchse{
    width: 1380px;
    height: 744px;
    background: #f5f5f7;
    margin: auto;
    margin-top: 250px;
    border-radius: 40px;
    background-image: url(./img/watchse.jpg);
    background-repeat: no-repeat;
    background-position: 85%;
    text-align: center;
    
}
.watchse-title{
    padding-top: 265px;
    padding-right: 560px;
}
.watchse-title h3{
   font-size: 48px;
   font-weight: 600;
}
.watchse-title span{
    font-size: 21px;
    font-weight: 400px;
}
.watchse-title .el-button{
    margin-top: 20px;
    margin-bottom: 20px;
}
.watchse-title a{
    font-size: 21px;
    font-weight: 400px;
    color: #06c;
    text-decoration: none;
    margin-left: 20px;
}
.watchse-title a:hover{
    text-decoration: underline;
}
</style>