<template>
    <div class="iphone">
        <!-- 内容1 -->
        <div class="iphone13pro">
            <div class="iphone-title">
                <h2><img src="./img/iphone13logo.png" alt=""></h2>
                <h3>强得很</h3>
                <span>RMB 333/月起或 RMB 7999 起，还可折抵换购。</span><br/>
                <el-button type="primary" round>购买</el-button>
                <a href="#">进一步了解 ></a>
            </div>
        </div>
        <!-- 内容2 -->
        <div class="iphone13">
            <div class="iphone-title">
                <h2><img src="./img/iphone13title.jpg" alt=""></h2>
                <h3>解锁超能力</h3>
                <span>RMB 217/月起或 RMB 5199 起，还可折抵换购</span><br/>
                <el-button type="primary" round>购买</el-button>
                <a href="#">进一步了解 ></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'iphone'
    }
</script>

<style lang="css" scoped>
.iphone{
    width: 100%;
    background: #f5f5f7;
}
/* 内容1的样式 */
.iphone13pro{
    width: 100%;
    height: 800px;
    background: #fff;
    background-image: url(./img/iphone13pro1.png);
    background-repeat: no-repeat;
    background-position: bottom;
    text-align: center;
}
.iphone-title{
    padding-top: 70px;
}

.iphone-title h3{
   font-size: 48px;
   font-weight: 600;
}
.iphone-title span{
    font-size: 21px;
    font-weight: 400px;
}
.iphone-title a{
    font-size: 21px;
    font-weight: 400px;
    color: #06c;
    text-decoration: none;
    margin-left: 20px;
}
.iphone-title a:hover{
    text-decoration: underline;
}
/* 内容2的样式 */
.iphone13{
    width: 100%;
    height: 700px;
    background: #fff;
    background-image: url(./img/iphone13-1.png);
    background-repeat: no-repeat;
    background-position: bottom;
    text-align: center;
    margin-top: 20px;
}
</style>