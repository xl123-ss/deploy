<template>
    <div class="layui-row aaa">
        <div class="layui-hide-xs  layui-col-md4">
            <a href="/"><img class="img"
                    src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"></a>
        </div>
    </div>
    <div class="layui-row">
        <div class="layui-hide-xs sm layui-show-sm-block   layui-col-md6  ">
            <div class="layui-col-md7 layui-col-md-offset5">
                <img class="img2" src="https://cdn2.jianshu.io/assets/web/sign_in_bg-bbc515a9c2e7734807ea281b9b2ab380.png">
            </div>
            <div class="layui-col-md7 layui-col-md-offset5">
                <img class="img3"
                    src="https://cdn2.jianshu.io/assets/web/login_page_download-791aa73fa61f50db586c09156c6242cf.png">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-warm xiazaibtn">下载简书APP</button>
            </div>
        </div>
        <div class="layui-col-xs12 layui-col-md6 ">
            <div class="main">
                <h4 class="title">
                    <div class="normal-tital">
                        <a class="active" href="login">登录</a>
                        <b>·</b>
                        <a href="register">注册</a>
                    </div>
                </h4>
                <div>
                    <div>
                        <input style="border-bottom:none;" type="text" placeholder="手机号或邮箱" class="layui-input">
                    </div>
                    <div>
                        <input type="password" placeholder="密码" class="layui-input">
                    </div>
                    <div class="footfrom">
                        <div class="rememberme">
                            <input type="checkbox"> <label>记住我</label>
                        </div>
                        <div>
                            <p style="color:#969696">登录遇到问题?</p>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="layui-btn layui-btn-radius layui-btn-normal loginbtn">登录</button>
                    </div>
                </div>
                <div class="more-sign">
                    <h6>社交账号登录</h6>
                    <ul class="otherul">
                        <li><img class="loginlogo"
                                src="https://music-1307940544.cos.ap-nanjing.myqcloud.com/test/xinlangweibo.png" alt="">
                        </li>
                        <li><img class="loginlogo"
                                src="https://music-1307940544.cos.ap-nanjing.myqcloud.com/test/weixin.png" alt=""></li>
                        <li><img class="loginlogo" src="https://music-1307940544.cos.ap-nanjing.myqcloud.com/test/QQ.png"
                                alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
input {
    background-color: rgba(220, 220, 220, 0.415);
    border-color: gainsboro;
    height: 50px;
}

.loginlogo {
    width: 28px;
    margin: 0px 13px;
}

@media screen and (max-width: 992px) {
    .sm {
        display: none !important;
    }
}

.otherul {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h6 {
    color: #969696;
}

h6:before {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: relative;
    width: 60px;
    top: 10px;
}

h6:before {
    left: 35px;
}

h6:after {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: relative;
    width: 60px;
    left: 260px;
    bottom: 10px;
}

.more-sign {
    margin-top: 50px;
    text-align: center;
}

.loginbtn {
    width: 100%;
}

.footfrom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rememberme {
    display: flex;
    align-items: center;
    color: #969696;
}



.img {
    width: 100px;
    margin-left: 50px;
}

.img2 {
    height: 60%;
    width: 333px;
    float: right;
}

.aaa {
    margin-top: 60px;
    margin-bottom: 80px;
}

.xiazaibtn {
    margin-top: 5%;
    width: 218px;
    margin-right: 5px;
    float: right;
}

.img3 {
    margin-top: 3%;
    margin-left: 2%;
    width: 55px;
    float: right;
}

.main {
    width: 350px;
    margin: 0 5%;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.408);
}

.title {
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    text-align: center;
}

h4 {
    font-size: 18px;
}
</style>
<style >
body {
    background-color: gainsboro;
}

.title a {
    padding: 12px;
    color: #969696;
}

.active {
    color: #F4A460 !important;
    font-weight: bold;
    border-bottom: 2px solid #F4A460;
}
</style>