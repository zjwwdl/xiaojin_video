<template>
  <div class="">
    <div class="test_header">
      <p>视频测试</p>
    </div>

    <!--介个控件有个小BUG 在真机上 声音按钮会无故消失。。。。-->
    <!--video-->
    <p style="margin-left: 0.2rem;margin-top: 0.1rem;font-size: 0.4rem">video</p>
    <div class="test_flex12">
      <video-player  ref="videoPlayer"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @ended="onPlayerEnded($event)"
                     @loadeddata="onPlayerLoadeddata($event)"
                     @waiting="onPlayerWaiting($event)"
                     @playing="onPlayerPlaying($event)"
                     @timeupdate="onPlayerTimeupdate($event)"
                     @canplay="onPlayerCanplay($event)"
                     @canplaythrough="onPlayerCanplaythrough($event)"
                     @ready="playerReadied"
                     @statechanged="playerStateChanged($event)">
      </video-player>
    </div>
    <!--video-->

  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  export default {
    mounted () {
//        video
      console.log('this is current player instance object', this.player)
    },
    data () {
      return {
        playerOptions: {
          // component options
          start: 0,
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_H"
          }],
//        poster: "../assets/image/1.jpg",
          playsinline:"true"
        }
      }
    },
    components:{
      videoPlayer
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
    },
    computed:{
      player() {
        return this.$refs.videoPlayer.player
      }
    }


  }
</script>

<style lang="less">
  @import '../components/test.less';

.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
  p{
    line-height: 1rem;
    text-align: center;
    .midlab(.4rem,@white);
  }
}

.test_flex12{
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  .bk(.04rem,@gray);
  min-height: 1rem;
}

/*重写视频内部布局*/
.video-player{
  /*总高度*/
  .vjs_video_3-dimensions{
    height: 4rem;
  }
  /*底部高度*/
  .video-js.vjs-custom-skin .vjs-control-bar {
    font-size: .2rem;
  }
  /*中间按钮*/
  .video-js.vjs-custom-skin .vjs-big-play-button {
    font-size: .35rem;
  }
}


</style>
