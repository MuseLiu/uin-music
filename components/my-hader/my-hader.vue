<template>
  <view class="hader">
    <view class="hader-icon" v-if="icon">
      <text class="iconfont icon-youjiantou" @click="gotoBlck"></text>
      <text class="iconfont icon-home" @click="gotoHome"></text>
    </view>
    <view>{{title}}</view>
  </view>
</template>

<script>
  import '@/icon-css/iconfont.css'
  export default {
    name: "my-hader",
    props: ['title',"icon"],
    data() {
      return {

      };
    },
    methods:{
      gotoBlck(){
        uni.navigateBack()
      },
      gotoHome(){
        uni.navigateTo({
          url:"/pages/home/home"
        })
      }
    }
  
  }
</script>

<style lang="scss" scoped>
  .hader {
    height: 75px;
    width: 100%;
    font-size: 16px;
    line-height: 80px;
    text-align: center;
    background-color: #007AFF;
    position: relative;
    color: #000;

    .hader-icon {
      width: 90px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      background-color: rgba(0,0,0,.3);
      border-radius: 15px;
      top: 50%;
      transform: translateY(-40%);
      display: flex;
      justify-content: space-around;
      margin-left: 20px;
     text {
        font-size: 20px;
        color: #FFFFFF;
      }
    }
  }
</style>
