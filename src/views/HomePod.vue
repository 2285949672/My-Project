<template>
    <div class="HomePod">
        <h2>未来到家 。</h2> 
        <span>只要连上你常用的设备，就能把家变成智能、便捷，又充满乐趣的安乐窝。<br/>
            点点 iPhone 或动动嘴，就能操控灯光、门锁和恒温器；无论你人在哪里，都<br/>
            能在各个房间播放想听的歌。而且这一切，都在 Apple周到的安全和隐私保护下进行。</span>
        <!-- 内容1 -->
        <div class="HomePod-content1">
            <div class="HomePod-card">
                <!-- 卡片1 -->
                <div class="HomePod-card1">
                    <h2>HomePod mini</h2>
                    <h3>底气十足的声音，<br/>响彻各个房间。</h3>
                    <span>RMB 749</span><br/>
                    <el-button type="primary" round>购买</el-button>
                    <a href="#">进一步了解 ></a>
                </div>
                <!-- 卡片2 -->
                <div class="HomePod-card2">
                    <h2><img src="./img/Homeminilogo.png" alt=""><br/>家庭</h2>
                    <h3>你的家，由你指挥。</h3>
                    <a href="#">进一步了解 ></a>
                </div>
            </div>
        </div>
        <div class="content2-title"><h2>把家变智能，家家都有好理由。</h2></div>
        <!-- 内容2 -->
        <div class="HomePod-content2">
            <div class="Homeapp-card">
                <div class="Homeapp-card1">
                    <h2>用手中常用的设备，<br/>随时随地掌控你的家。</h2>
                    <a href="#">进一步了解家庭 app ></a>
                </div>
                <div class="Homeapp-card2">
                    <h2>让快乐的声音在各个房间<br/>互相传递。</h2>
                    <a href="#">进一步了解 HomePod mini ></a>
                </div>
                <div class="Homeapp-card3">
                    <h2>说一声，<br/>让一切自动发生。</h2>
                    <a href="#">进一步了解Siri ></a>
                    <p>嘿 Siri，关掉<br/>浴室的灯</p>
                </div>
                <div class="Homeapp-card4">
                    <h2>Apple 安全和隐私，<br/>周到到家。</h2>
                    <a href="#">进一步了解隐私 ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomePod'
    }
</script>

<style lang="css" scoped>
.HomePod{
    width: 100%;
    height: 2000px;
    background-color: #f5f5f7;
    text-align: center;
}
/* 顶部说明样式 */
.HomePod h2{
    font-size: 96px;
    font-weight: 700px;
    padding-top: 40px;
}
.HomePod span{
    font-size: 24px;
    font-weight: 600px;
    color: #86868b;
}
/* 内容1的样式 */
.HomePod-content1{
    width: 100%;
    margin-top: 50px;
}
.HomePod-card{
    width: 1380px;
    margin: auto;
    
}
/* 卡片1的样式 */
.HomePod-card1{
    width: 654px;
    height: 800px;
    background: #fff;
    border-radius: 20px;
    float: left;
    margin-right: 15px;
    background-image: url(./img/HPmini.jpg);
    background-repeat: no-repeat;
    background-position:bottom;
}
.HomePod-card1 h2{
    margin-top: 40px;
    font-size: 21px;
    font-weight: 600;
}
.HomePod-card1 h3{
    font-size: 40px;
    font-weight: 700;
    margin-left: 25px;
}
.HomePod-card1 span{
    font-size: 21px;
    font-weight: 400;
    margin-left: 25px;
}
.HomePod-card1 .el-button{
    margin-top: 20px;
    margin-right: 20px;
}
.HomePod-card1 a{
    text-decoration: none;
    font-weight: 400;
}
.HomePod-card1 a:hover{
    text-decoration: underline;
}
/* 卡片2的样式 */
.HomePod-card2{
    width: 654px;
    height: 800px;
    background: #fff;
    border-radius: 20px;
    float: left;
    margin-left: 15px;
    background-image: url(./img/Homemini.jpg);
    background-repeat: no-repeat;
    background-position:right bottom;
}
.HomePod-card2 h2{
    margin-top: 40px;
    font-size: 21px;
    font-weight: 600;
}
.HomePod-card2 h3{
    font-size: 40px;
    font-weight: 700;
    margin-left: 25px;
}
.HomePod-card2 a{
    text-decoration: none;
    font-weight: 400;
}
.HomePod-card2 a:hover{
    text-decoration: underline;
}
/* 内容2的标题 */
.content2-title{
    margin-top: 950px;
}
.content2-title h2{
    font-size: 64px;
    font-weight: 600;
}
.Homeapp-card{
    padding-top: 50px;
    width: 1640px;
    margin: auto;
}
/* 卡片1 */
.Homeapp-card1{
    width: 400px;
    height: 460px;
    background: #fff;
    float: left;
    border-radius: 20px;
    background-image: url(./img/hac1.jpg);
    background-repeat: no-repeat;
    background-position:bottom;
}
.Homeapp-card1 h2{
    font-size: 24px;
    font-weight: 600px;
}
.Homeapp-card1 a{
    font-size: 17px;
    font-weight: 400px;
    text-decoration: none;
}
.Homeapp-card1 a:hover{
    text-decoration: underline;
}
/* 卡片2 */
.Homeapp-card2{
    width: 400px;
    height: 460px;
    background: #fff;
    float: left;
    border-radius: 20px;
    margin-left: 10px;
    background-image: url(./img/hac2.jpg);
    background-repeat: no-repeat;
    background-position:bottom;
}
.Homeapp-card2 h2{
    font-size: 24px;
    font-weight: 600px;
}
.Homeapp-card2 a{
    font-size: 17px;
    font-weight: 400px;
    text-decoration: none;
}
.Homeapp-card2 a:hover{
    text-decoration: underline;
}
/* 卡片3 */
.Homeapp-card3{
    width: 400px;
    height: 460px;
    background: #fff;
    float: left;
    border-radius: 20px;
    margin-left: 10px;
}
.Homeapp-card3 h2{
    font-size: 24px;
    font-weight: 600px;
}
.Homeapp-card3 a{
    font-size: 17px;
    font-weight: 400px;
    text-decoration: none;
}
.Homeapp-card3 a:hover{
    text-decoration: underline;
}
.Homeapp-card3 p{
    margin-top: 100px;
    font-size: 42px;
    font-weight: 700;
    background: linear-gradient(90deg,#ffa54d,#f07bc5 50%,#43aeff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}
/* 卡片4 */
.Homeapp-card4{
    width: 400px;
    height: 460px;
    background: #fff;
    float: left;
    border-radius: 20px;
    margin-left: 10px;
    background-image: url(./img/hac4.jpg);
    background-repeat: no-repeat;
    background-position:bottom;
}
.Homeapp-card4 h2{
    font-size: 24px;
    font-weight: 600px;
}
.Homeapp-card4 a{
    font-size: 17px;
    font-weight: 400px;
    text-decoration: none;
}
.Homeapp-card4 a:hover{
    text-decoration: underline;
}
</style>