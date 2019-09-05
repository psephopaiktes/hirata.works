<template>

    <transition name="modal"><div v-if="$store.state.showModal" id="container">

      <div id="overlay" @click="$store.commit('hideModal')"></div>

      <section id="modal">
        <ModalContentWork v-if="$store.state.modalType=='work'" />
        <ModalContentContact v-else-if="$store.state.modalType=='contact'" />
        <div v-else>
          エラーが発生しました。
          <button @click="$store.commit('hideModal')">閉じる</button>
        </div>
        <button class="bottomClose" @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i>閉じる</button>
      </section>

    </div></transition>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalContentWork from '@/components/ModalContentWork.vue';
import ModalContentContact from '@/components/ModalContentContact.vue';

@Component({
  components: {
    ModalContentWork,
    ModalContentContact,
  },
})
export default class ModalView extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";

.modal,.modal-enter-active{
  transition: all .2s ease-out;
}
.modal-enter,.modal-leave-to{
  opacity: 0;
  transform: translateY(32px);
}

#container{
  position: fixed;
  top: -32px; left: 0;
  padding-top: 32px;
  width: 100vw;
  height: calc(100vh + 32px);
  overflow: scroll;
  z-index: 9999;
}
#overlay{
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba($COLOR_MAIN, .1);
  backdrop-filter: blur(8px);
}
#modal{
  position: relative;
  width: 800px;
  margin: 80px auto;
  padding: 48px;
  background: $COLOR_BASE;
  border-radius: 8px;
  box-shadow: 0 16px 32px rgba($COLOR_MAIN, .2);
  @media (max-width: 832px){
    width: calc(100vw - 32px);
    padding: 40px;
  }
  @media (max-width: $WIDTH_SP){
    padding: 32px;
    margin: 32px auto 96px;
  }
  .bottomClose{
    display: none;
    @media (max-width: $WIDTH_SP) {
      display: block;
      position: absolute;
      top: calc(100% + 16px);
      left: calc(50% - 60px);
      width: 120px;
      height: 44px;
      line-height: 40px;
      border: 3px solid #fff;
      color: #fff;
      font-size: 16px;
      letter-spacing: .1em;
      font-weight: bold;
      .material-icons-outlined{
        font-size: 1.2em;
        vertical-align: text-bottom;
        margin-right: 4px;
        margin-left: -2px;
      }
    }
  }
}
</style>
