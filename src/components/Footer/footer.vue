<template>
    <div class="footer">
        <!-- 底部头部 -->
        <div class="footer-top">
            <span class="f-s">1.有资格的购买人在规定的活动地点购买符合条件的Mac或符合条件的iPad,并搭配一副符合条件的AirPods时,可享促销优惠金额,购买每台符合条件的Mac或符合条件的
                iPad时,每个有资格的购买人仅限购买一副 AirPods。优惠活动视供应状况而定。需遵守此处列出的条款和条件。
            </span>
        </div>
        <!-- 底部内容 -->
        <div class="footer-content">
            <!-- 选购及了解 -->
            <div class="content">
                <h3>选购及了解</h3>
                <ul>
                    <li><a href="#">商店</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">家居</a></li>
                    <li><a href="#">AirTag</a></li>
                    <li><a href="#">配件</a></li>
                    <li><a href="#">App Store充值卡</a></li>
                </ul>
            </div>
            <!-- 服务和账户 -->
            <div class="content">
                <!-- 服务 -->
                <div class="c2-t">
                    <h3>服务</h3>
                    <ul>
                        <li><a href="#">Apple Music</a></li>
                        <li><a href="#">iCloud</a></li>
                        <li><a href="#">Apple Pay</a></li>
                        <li><a href="#">Apple 播客</a></li>
                        <li><a href="#">App Store</a></li>
                    </ul>
                </div>
                <!-- 账户 -->
                <div class="c2-f">
                    <h3>账户</h3>
                    <ul>
                        <li><a href="#">管理你的 Apple ID</a></li>
                        <li><a href="#">Apple Store 账户</a></li>
                        <li><a href="#">iCloud.com</a></li>
                    </ul>
                </div>
            </div>
            <!-- Apple Store 商店 -->
            <div class="content">
                <h3>Apple Store 商店</h3>
                <ul>
                    <li><a href="#">查找零售店</a></li>
                    <li><a href="#">Genius Bar 天才吧</a></li>
                    <li><a href="#">Today at Apple</a></li>
                    <li><a href="#">Apple 夏令营</a></li>
                    <li><a href="#">Apple Store App</a></li>
                    <li><a href="#">翻新和优惠</a></li>
                    <li><a href="#">分期付款</a></li>
                    <li><a href="#">Apple Trade In 换购计划</a></li>
                    <li><a href="#">订单状态</a></li>
                    <li><a href="#">选购帮助</a></li>
                </ul>
            </div>
            <!-- 商务应用和教育应用 -->
            <div class="content">
                <!-- 商务应用 -->
                <h3>商务应用</h3>
                <div>
                    <ul>
                        <li><a href="#">Apple 与商务</a></li>
                        <li><a href="#">商务选购</a></li>
                    </ul>
                </div>
                <!-- 教育应用 -->
                <div>
                    <h3>教育应用</h3>
                    <ul>
                        <li><a href="#">Apple 与教育</a></li>
                        <li><a href="#">高校师生选购</a></li>
                    </ul>
                </div>
            </div>
            <!-- Apple价值观和关于Apple -->
            <div class="content">
                <!-- Apple价值观 -->
                <div>
                    <h3>Apple 价值观</h3>
                    <ul>
                        <li><a href="#">辅助功能</a></li>
                        <li><a href="#">环境责任</a></li>
                        <li><a href="#">隐私</a></li>
                        <li><a href="#">供应商责任</a></li>
                    </ul>
                </div>
                <!-- 关于Apple -->
                <div>
                    <h3>关于 Apple</h3>
                    <ul>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Apple 管理层</a></li>
                        <li><a href="#">工作机会</a></li>
                        <li><a href="#">创造就业</a></li>
                        <li><a href="#">商业道德与合规性</a></li>
                        <li><a href="#">活动</a></li>
                        <li><a href="#">联系 Apple</a></li>
                    </ul>
                </div>
            </div>
            <!-- 更多选购方式和联系方式 -->
            <div class="phone">
                更多选购方式：<a href="#">查找你附近的Apple Store 零售店</a>及<a href="#">更多门店</a>,或者致电400-xxx-xxx
            </div>
        </div>
        <!-- 底部说明 -->
        <div class="footer-f">
            <p>个人仿造苹果官网所做的简易的缩减的vue页面，仅供个人学习研究 如有侵权，联系删除</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .footer{
        width: 100%;
        position: relative;
        background-color: #f5f5f7;
        margin-top: 20px;
    }
    .footer-top{
        max-width: 980px;
        font-size: 12px;
        font-weight: 400;
        display: block;
        color: #6e6e73;
        margin: auto;
        padding: 17px 0 11px;
        border-bottom: 1px solid #d2d2d7;
    }
    .footer-content{
        max-width: 980px;
        margin: auto;
    }
    .footer-content ul{
        text-decoration: none;
        
    }
    .content{
        float: left;
        padding: 47px;
    }
    .content ul{
        list-style: none;
        margin-left: -30px;
    }
    .content h3{
        font-size: 12px;
    }
    .content a{
        text-decoration: none;
        font-size: 12px;
        color: rgb(163, 154, 154);
    }
    .content a:hover{
        text-decoration:underline;
    }
    .phone{
        font-size: 12px;
        max-width: 980px;
        color: rgb(163, 154, 154);
        margin-bottom: 7px;
        border-bottom: 1px solid #d2d2d7;
    }
    .phone a{
        text-decoration: none;
    }
    .phone a:hover{
        text-decoration:underline;
    }
    .footer-f{
        max-width: 980px;
        font-size: 12px;
        margin: auto;
        color: rgb(163, 154, 154);
        text-align: center;
    }
</style>