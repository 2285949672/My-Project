<template>
    <div class="parts">
        <!-- 顶部 -->
        <div class="parts-top">
            <div class="top-title">
                <div class="title">配件</div>
                <div class="title-drop">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Mac</el-dropdown-item>
                            <el-dropdown-item>iPad</el-dropdown-item>
                            <el-dropdown-item>iPhone</el-dropdown-item>
                            <el-dropdown-item >Watch</el-dropdown-item>
                            <el-dropdown-item divided>所有产品</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <!-- 内容1 -->
        <div class="parts-content1">
            <div class="content1-title">
                <h2>MagSafe 磁吸配<br/>件，怎⁠么⁠配都‍搭。</h2>
                <h3>保护壳、卡包、无线充电器，或外接电<br/>池，全都一贴即合。</h3>
                <a href="#">选购 MagSafe 磁吸配件 ></a>
            </div>
        </div>
        <!-- 搜索 -->
        <div class="serch">
            <div class="serch-content">
                <h2>找到你想要的配件</h2>
                <el-input v-model="input" placeholder="搜索配件"></el-input>
            </div>
        </div>
        <!-- 内容2 -->
        <div class="parts-content2">
            <div class="content2-title">Apple 精选配件</div>
            <div class="content2-card">
                <el-row :gutter="10">
                    <el-col :span="8">
                        <div class="grid-content bg-purple card-bg1">
                             <h2>新款</h2>
                             <h3>iPhone 13 Pro 专用 MagSafe 硅胶保护<br/>壳</h3>
                             <p>RMB 399</p>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple card-bg2">
                            <h2>新款</h2>
                            <h3>iPhone 13 Pro 专用 MagSafe 硅胶保护壳</h3>
                            <p>RMB 399</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="8">
                        <div class="grid-content bg-purple card-bg3">
                            <h2>新款</h2>
                            <h3>彩虹版回环式运动表带</h3>
                            <p>RMB 379</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple card-bg4">
                            <h2>新款</h2>
                            <h3>适用于 iPad Air 的智能双面夹</h3>
                            <p>RMB 549</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple card-bg5">
                            <h2>新款</h2>
                            <h3>带有触控 ID 和数字小键盘的妙控键盘</h3>
                            <p>RMB 1399</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'parts'
    }
</script>

<style lang="css" scoped>
.parts{
    width: 100%;
}
/* 顶部样式 */
.parts-top{
    width: 100%;
    height: 52px;
    background: #fff;
    border-bottom: 1px solid #ccc;
}
.top-title{
    width: 940px;
    margin: auto;
    line-height: 52px;
}
.title{
    font-size: 21px;
    font-weight: 600;
    float: left;
}
/* 顶部下拉菜单样式 */
.title-drop{
    float: right;
}
.el-dropdown-link {
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    color: #1d1d1f;
}
.el-dropdown-link span{
    font-size: 10px;
    font-weight: 400;
}
.el-icon-arrow-down {
    font-size: 12px;
}
/* 内容1的样式 */
.parts-content1{
    width: 100%;
    height: 400px;
    background: #f5f5f7;
    background-image: url(./img/mag.jpg);
    background-size: 1400px;
    background-repeat: no-repeat;
    background-position:120%;
}
.parts-content1 h2{
    font-size: 48px;
    font-weight: 600;
}
.parts-content1 h3{
    font-size: 21px;
    margin-top: 30px;
    font-weight: 400;
}
.parts-content1 a{
    font-size: 21px;
    font-weight: 400;
    text-decoration: none;
}
.parts-content1 a:hover{
    text-decoration: underline;
}
.content1-title{
    width: 500px;
    padding-top: 80px;
    margin-left: 400px;
}
/* 配件搜索样式 */
.serch{
    width: 100%;
}
.serch-content{
    width: 980px;
    height: 250px;
    margin: auto;
    border-bottom: 1px solid #ccc;
    text-align: center
}
.serch-content h2{
    font-size: 32px;
    font-weight: 600;
    padding-top: 50px;
}
.serch-content .el-input{
    margin-top: 40px;
    width: 600px;
    height: 56px;
}
/* 内容2的样式 */
.parts-content2{
    width: 100%;
}
.content2-title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 50px;
}
.content2-card{
    width: 1100px;
    margin: auto;
    margin-top: 50px;
}
.el-row {
    margin-bottom: 10px;
}
.bg-purple {
    height: 600px;
    background: #f5f5f7;
    border-radius: 20px;
    text-align: center;
}
.bg-purple h2{
    font-size: 12px;
    font-weight: 400;
    color: #bf4800;
    padding-top: 470px;
   
}
.bg-purple h3{
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 20px;
}
.bg-purple p{
    font-size: 14px;
    font-weight: 400;
}
/* 卡片1 */
.card-bg1{
    background-image: url(./img/pcard1.png);
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: 50% 30%;
}
/* 卡片2 */
.card-bg2{
    background-image: url(./img/pcard2.png);
    background-repeat: no-repeat;
    background-size: 700px;
    background-position: 50% 10%;
}
/* 卡片3 */
.card-bg3{
    background-image: url(./img/pcard3.png);
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: 50% 20%;
}
/* 卡片4 */
.card-bg4{
    background-image: url(./img/pcard4.png);
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: 50% 20%;
}
/* 卡片5 */
.card-bg5{
    background-image: url(./img/pcard5.png);
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: 50% 20%;
}
</style>