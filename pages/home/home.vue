<template>
  <view>
    <my-hader title="网易云音乐" :icon='false'></my-hader>
    <view class="container">
      <scroll-view scroll-y="true">
        <view class="home-search">
          <text class="iconfont icon-fangdajing"></text>
          <text>搜索</text>
        </view>
        <view class="home-list">
          <view class="home-list-item" v-for="(item,index) in topList" :key="index" @tap="gotoMusicDetails">
            <view class="item-left">
              <image :src="item.coverImgUrl"></image>
              <text>{{item.updateFrequency}}</text>
            </view>
            <view class="item-right">
              <text v-for="(song,index) in item.tracks">{{index+1}}.{{song.first}}-{{song.second}}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import '@/icon-css/iconfont.css'
  export default {
    data() {
      return {
        topList: []
      };
    },
    onLoad() {
      this.getTopList()
    },
    methods: {
      getTopList() {
        this.$request('/toplist/detail')
          .then((res) => {
            let data = res[1].data.list
            data.length = 4
            this.topList = data
          })
      },
      gotoMusicDetails(){
        uni.navigateTo({
          url:'/pages/list/list'
        })
      }
    }


  }
</script>

<style lang="scss" scoped>
  .home-search {
    height: 74rpx;
    border-radius: 32px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 70rpx;
    background-color: #f7f7f7;
    margin: 70rpx 30rpx 30rpx 30rpx;
    border-radius: 35rpx;
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 70rpx;
    background-color: #f7f7f7;
    margin: 70rpx 30rpx 30rpx 30rpx;
    border-radius: 35rpx;

    .iconfont {
      margin-right: 10px;
    }

    text {
      color: #C0C0C0;
      font-size: 28rpx;
    }
  }

  .home-list {
    width: 100%;

    .home-list-item {
      width: 100%;
      display: flex;
      align-items: center;

      .item-left {
        position: relative;
        margin: 30rpx;

        image {
          display: block;
          width: 212rpx;
          height: 212rpx;
          border-radius: 15px;
        }
       text {
          position: absolute;
          left: 10px;
          bottom: 10px;
          color: #FFFFFF;
          font-size: 24rpx;
        }
      }

      .item-right {
        display: flex;
        flex-direction: column;
        overflow: hidden; 
       padding-right: 10px;
      text {
          line-height: 66rpx;
          white-space: nowrap;
          font-size: 28rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          -webkit-text-overflow: ellipsis;
          -moz-text-overflow: ellipsis;
          }
      }
    }
  }
</style>
