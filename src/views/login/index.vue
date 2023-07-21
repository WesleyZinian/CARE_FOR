<script setup lang="ts">
import {computed, ref} from "vue";

let posX = ref<Number>(0)
let posY = ref<Number>(0)

const toward = computed(() => {
  return `rotateX(${Number(posX.value) / 100}deg) rotateY(${Number(posY.value) / 100}deg)`
})
const getPosition = (obj: any) => {
  console.log(obj)
  posX.value = obj.offsetX
  posY.value = obj.offsetY
}

</script>

<template>
  <div id="login_warp">
    <div class="login_icon" @mousemove="getPosition">
      <div class="icon_content">
        <img class="vite animate__animated animate__lightSpeedInLeft" src="../../assets/img/vite.svg" alt="">
        <img class="vue animate__animated animate__lightSpeedInLeft" src="../../assets/vue.svg" alt="">
      </div>
    </div>
    <div class="login_form_warp">

    </div>
  </div>
</template>

<style scoped lang="scss">
#login_warp {
  width: 100%;
  height: 100%;
  background: #fafafb;
  position: relative;
  @media screen and (min-width: 900px) {
    .login_icon {
      height: 100%;
      width: calc(100% - 460px);
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon_content {
        width: 500px;
        height: 500px;
        position: relative;

        .vite {
          width: 240px;
          height: 240px;
          position: absolute;
          top: 0;
          left: 0;
        }

        .vue {
          width: 240px;
          height: 240px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    .login_form_warp {
      width: 460px;
      height: var(--hundred);
      background-color: #FFFFFF;
      float: left;

    }
  }
  @media screen and (max-width: 900px) {
    .login_form_warp {
      width: 460px;
      height: var(--hundred);
      background-color: #FFFFFF;
      margin: 0 auto;
    }
  }

}
@keyframes left-hurry-in {
  0% {
    display: none;
    left: -500px;
  }
}
</style>
