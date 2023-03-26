<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex-nowrap">
    <RouterLink to="home" class="navbar-brand img-wrapper">
      <img
        src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
        alt="Nav logo"
      />
    </RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink to="home" class="f-center">
            <span class="iconfont icon-discover"></span>
            <a class="nav-link left" href="#">首页 <span class="sr-only">(current)</span></a>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="xiazai" class="f-center">
            <span class="iconfont icon-download"></span>
            <a class="nav-link left" href="#">下载App</a>
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="huiyuan" class="f-center">
            <span class="iconfont icon-vip"></span>
            <a class="nav-link left" href="#">会员</a>
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="itjishu" class="f-center">
            <span class="iconfont icon-jishufuwu"></span>
            <a class="nav-link left" href="#">It技术</a>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="f-center f-between">
      <form class="form-inline my-2 my-lg-0 flex-nowrap position-relative">
        <input
          class="form-control mr-sm-2 search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <span class="iconfont icon-sousuo"></span>
        <!--        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
      </form>

      <div class="choujiang position-relative">
        <img
          src="https://cdn2.jianshu.io/assets/web/download_app-93f9722ab463bb07c6f3c66c8549bfaf.png"
        />
      </div>

      <div>
        <ul class="navbar-nav mr-auto d-flex flex-row">
          <li class="nav-item active">
            <RouterLink to="Aa">
              <a class="nav-link" href="#">Aa <span class="sr-only">(current)</span></a>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="login">
              <a class="nav-link" href="#">登录 <span class="sr-only">(current)</span></a>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="register">
              <a class="layui-btn layui-btn-radius layui-btn-primary border border-warning" href="#"
                >注册 <span class="sr-only">(current)</span></a
              >
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="write">
              <a class="layui-btn layui-btn-radius layui-btn-danger" href="#"
                >写文章 <span class="sr-only">(current)</span></a
              >
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
.img-wrapper {
  width: 60px;
  height: 60px;
  /*border-radius: 50%;*/
}

.choujiang img {
  width: 60px;
  height: 60px;
}

.choujiang:after {
  position: absolute;
  display: flex;
  /*border: 1px solid black;*/
  content: '抽奖';
  font-size: 14px;
  color: #ffc961;
  font-weight: 400;
  top: 30%;
  left: 30%;
}

.search {
  border-radius: 25px;
}

.icon-sousuo {
  position: absolute;
  right: 10%;
}
/*
>1400时，显示icon
*/
@media (min-width: 1400px) {
  .f-center .iconfont {
    display: inline-block !important;
  }
}
/*
1100-1400 不显示图标
*/
@media (max-width: 1400px) and (min-width: 1100px) {
  .f-center .iconfont:not(.icon-sousuo) {
    display: none !important;
  }
}
/*
<1100 只显示图标
*/
@media (max-width: 1100px) {
  .f-center .iconfont {
    display: inline-block !important;
  }
  .f-center .left {
    visibility: hidden;
  }
}
/**
<992 全部显示
 */
@media (max-width: 991.98px) {
  .f-center .nav-link {
    visibility: visible;
  }
  /*.flex-nowrap{*/
  /*  flex-wrap: wrap !important;*/
  /*}*/
}
</style>
