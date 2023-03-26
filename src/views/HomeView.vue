<script setup>
import { reactive } from 'vue'
const data = reactive([
  {
    title: '告诉你一个残忍的人际关系',
    content:
      '莫言: 告诉你一个残忍的人际关系： 你和任何人的关系， 其实并不取决于 你对别人有多好， 而是取决于你的强弱， 手上筹码的多少。 人们普遍对强者...',
    zuanshi: '54.4',
    author: 'J一个人的朝圣',
    review: '121',
    xihuan: '615',
    img: 'https://upload-images.jianshu.io/upload_images/16811553-b8e260241aaff3f1.jpg'
  },
  {
    title: '生病后家将不家了',
    content:
      '我是个爱干净的人，每天大扫除是我的习惯，可自从感染后，干净的家已面目全非。 发烧头晕乏力不想吃饭，这些症状的弄的人都不像人了，整天在床上躺着，牙...',
    zuanshi: '46.6',
    author: '奋发春风cw',
    review: '32',
    xihuan: '281',
    img: ''
  },
  {
    title: '写商单上瘾了',
    content:
      '我来头条一年多了，平时我只知道在头条上写微头条，不定期地能写出爆款，爆款的微头条一般能挣几十块钱，当然不是爆款的收益甚微，块儿八角的，还不如在小...',
    zuanshi: '34.2',
    author: '奋发春风cw',
    review: '19',
    xihuan: '264',
    img: ''
  }
])
</script>

<template>
  <div class="container d-flex">
    <div class="col-8">
      <template v-for="item in data" :key="item.title">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex">
              <div class="flex-1">
                <h5 class="">{{ item.title }}</h5>
                <p class="grey">{{ item.content }}</p>
                <div class="f-start">
                  <div style="color: orange">
                    <span class="iconfont icon-zuanshi"></span>
                    <span class="card-text">{{ item.zuanshi }}</span>
                  </div>

                  <div class="ml-2 grey">{{ item.author }}</div>

                  <div class="ml-2 grey">
                    <span class="iconfont icon-pinglun"></span>
                    <span class="card-text">{{ item.review }}</span>
                  </div>

                  <div class="ml-2 grey">
                    <span class="iconfont icon-aixin_shixin"></span>
                    <span class="card-text">{{ item.xihuan }}</span>
                  </div>
                </div>
              </div>
              <div v-if="item.img.length != 0">
                <img :src="item.img" class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="col-4">
      <div class="border activity">
        <div>
          <div class="f-center ml-2">
            <div>日更挑战</div>

            <span class="iconfont icon-xiangyou1"> </span>
          </div>
          <div class="flex-1" />
          <div class="mr-2">
            <span class="iconfontL icon-rili" />
          </div>
        </div>

        <div>
          <div class="f-center ml-2">
            <div>简书会员</div>

            <span class="iconfont icon-xiangyou1"> </span>
          </div>
          <div class="flex-1" />
          <div class="mr-2">
            <span class="iconfontL icon-jishufuwu" />
          </div>
        </div>

        <div>
          <div class="f-center ml-2">
            <div>优选连载</div>

            <span class="iconfont icon-xiangyou1"> </span>
          </div>
          <div class="flex-1" />
          <div class="mr-2">
            <span class="iconfontL icon-zuanshi" />
          </div>
        </div>

        <div>
          <div class="f-center ml-2">
            <div>简书版权</div>

            <span class="iconfont icon-xiangyou1"> </span>
          </div>
          <div class="flex-1" />
          <div class="mr-2">
            <span class="iconfontL icon-jurassic_text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card img {
  width: 150px;
  height: 150px;
}
.grey {
  color: grey !important;
}
.activity > div {
  height: 35px;
  border: 1px solid red;
  margin: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.activity > div:nth-of-type(1) {
  background: #b6d2eb;
}

.activity > div:nth-of-type(2) {
  background: #fdb74f;
}
.activity > div:nth-of-type(3) {
  background: #f3dfbc;
}
.activity > div:nth-of-type(4) {
  background: #c0e3dd;
}
</style>
