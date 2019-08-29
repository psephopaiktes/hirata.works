<template><div id="app">

  <ModalView />

  <nav class="en" id="globalNav">
    <h1><router-link to="/">Akira HIRATA</router-link></h1>
    <ul>
      <li><router-link to="/">
        <i class="material-icons-outlined">home</i><span>HOME</span>
      </router-link></li>
      <li><router-link to="/about">
        <i class="material-icons-outlined">person</i><span>ABOUT</span>
      </router-link></li>
      <li><router-link to="/works">
        <i class="material-icons-outlined">widgets</i><span>WORKS</span>
      </router-link></li>
      <li><button @click="$store.commit('showContactModal')">
          <i class="material-icons-outlined">send</i><span>CONTACT</span>
      </button></li>
    </ul>
  </nav>

  <transition name="page"><router-view /></transition>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalView from '@/components/ModalView.vue';

@Component({
  components: {
    ModalView,
  },
})
export default class App extends Vue {

  // data
  // private loading: boolean = true;

  // lifecycle hook
  public mounted() {
    window.addEventListener('load', () => {
      const elm = document!.getElementById('loading');
      if (!elm) { return; }
      elm.classList.add('hide');
    });
    if (this.$route.query.wid) {
      this.$store.commit('showWorkModal', this.$route.query.wid);
    } else if (this.$route.query.contact) {
      this.$store.commit('showContactModal');
    }
  }
}
</script>


<style lang="scss">
@import "@/scss/common.scss";
@import "@/scss/foundation.scss";
@import "@/scss/utility.scss";
@import "@/scss/layout.scss";


.page,.page-enter-active{
  transition: all .4s ease-out;
}
.page-enter,.page-leave-to{
  opacity: 0;
  filter: blur(20px);
}

#globalNav{
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $COLOR_THEME;
  z-index: 9998;
  @media (max-width: $WIDTH_TAB){
    position: relative;
    justify-content: start;
    padding: 0 16px;
    width: 100vw;
    height: 72px;
    float: none;
    flex-direction: row;
  }
  @media (max-width: $WIDTH_SP) {
    position: fixed;
    top: auto; bottom: 0;
    left: 0;
    width: 100vw;
    height: 56px;
    background: rgba($COLOR_THEME,.8);
    backdrop-filter: blur(6px);
    box-shadow: 0 0 32px rgba(darken($COLOR_THEME, 30%),.1);
  }
  a{
    text-decoration: none;
  }
  h1 a{
    display: block;
    width: 200px;
    height: 64px;
    line-height: 56px;
    text-align: center;
    font-size: 24px;
    margin-top: -32px;
    color: darken($COLOR_THEME, 16%);
    border: 6px solid darken($COLOR_THEME, 14%);
    @media (max-width: $WIDTH_TAB) {
      display: none;
    }
  }
  ul{
    width: 200px;
    font-size: 18px;
    margin-top: 96px;
    @media (max-width: $WIDTH_TAB) {
      display: flex;
      width: 100%;
      height: 56px;
      margin: 24px 0 0;
      font-size: 16px;
    }
    @media (max-width: 600px) {
      font-size: 14px;
    }
    @media (max-width: $WIDTH_SP) {
      margin: 0;
    }
    li{
      text-align: right;
      margin-top: 16px;
      @media (max-width: $WIDTH_TAB) {
        margin: 0;
        text-align: left;
      }
      @media (max-width: $WIDTH_SP) {
        width: 25%;
      }
    }
    li:last-child{
      @media (max-width: $WIDTH_TAB) {
        margin-left: auto;
      }
      @media (max-width: $WIDTH_SP) {
        position: relative;
      }
    }
    a{
      color: $COLOR_BASE;
      opacity: .4;
      font-weight: 300;
      @media (max-width: $WIDTH_TAB) {
        display: block;
        width: 120px;
        height: 48px;
        line-height: 48px;
      }
      @media (max-width: 600px) {
        width: 100px;
      }
      @media (max-width: $WIDTH_SP) {
        width: 100%;
        text-align: center;
      }
      &:hover{
        opacity: 1;
      }
      &.router-link-exact-active{
        font-weight: 600;
        opacity: 1;
      }
    }
    span{
      @media (max-width: $WIDTH_SP) {
        display: none;
      }
    }
    i{
      vertical-align: text-top;
      margin-right: 8px;
      @media (max-width: $WIDTH_SP) {
        margin: 0;
        font-size: 28px;
      }
    }
    button{
      width: 160px;
      height: 48px;
      line-height: 48px;
      border-radius: 8px;
      margin-top: 64px;
      background: $COLOR_MAIN;
      color: #fff;
      opacity: .9;
      box-shadow: 0 16px 32px rgba(darken($COLOR_THEME, 30%),.5);
      font-size: 18px;
      font-weight: 500;
      transition: .3s ease-out;
      @media (max-width: $WIDTH_TAB) {
        margin: 0;
      }
      @media (max-width: $WIDTH_SP) {
        position: absolute;
        top: -24px; left: calc(50% - 32px);
        width: 64px;
        height: 64px;
        border-radius: 32px;
        opacity: 1;
        line-height: 20px;
        padding-left: 6px;
      }
      &:hover{
        opacity: 1;
        transform: scale(1.04);
        transition: .1s ease-out;
      }
    }
  }
}
</style>
