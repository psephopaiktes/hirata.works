<template>
  <div id="app">

    <ModalView />

    <LoadingView v-show="loading" />

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

    <main>
      <router-view />
      <footer class="en">
        <ul>
          <li><a href="https://twitter.com/psephopaiktes" target="brank_" title="Twitter">
            <SnsTwitter />
          </a></li>
          <li><a href="https://hirata.blog/" target="brank_" title="Blog">
            <SnsBlog />
          </a></li>
          <li><a href="https://note.mu/psephopaiktes" target="brank_" title="note">
            <SnsNote />
          </a></li>
          <li><a href="https://github.com/psephopaiktes/" target="brank_" title="GitHub">
            <SnsGithub />
          </a></li>
          <li><a href="https://www.instagram.com/psephopaiktes/" target="brank_" title="Instagram">
            <SnsInstagram />
          </a></li>
        </ul>
        <p><small>© Akira HIRATA 2019</small></p>
      </footer>
    </main>
  </div>
</template>


<style lang="scss">
@import "@/scss/common.scss";
@import "@/scss/foundation.scss";
@import "@/scss/utility.scss";
@import "@/scss/layout.scss";

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
    z-index: 9999;
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
    }
    @media (max-width: $WIDTH_SP) {
      width: 320px;
      margin: 0;
    }
    li{
      text-align: right;
      margin-top: 16px;
      @media (max-width: $WIDTH_TAB) {
        margin: 0;
        text-align: left;
      }
    }
    li:last-child{
      @media (max-width: $WIDTH_TAB) {
        margin-left: auto;
      }
    }
    a{
      color: $COLOR_BASE;
      opacity: .6;
      font-weight: 300;
      @media (max-width: $WIDTH_TAB) {
        display: block;
        width: 120px;
        height: 48px;
        line-height: 48px;
      }
      @media (max-width: $WIDTH_SP) {
        background: red;
        width: 80px;
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
    }
    button{
      width: 160px;
      height: 48px;
      line-height: 48px;
      border-radius: 8px;
      margin-top: 64px;
      background: $COLOR_MAIN;
      /* color: darken($COLOR_THEME, 20%); */
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
        bottom: 16px; right: 16px;
        width: 56px;
        height: 56px;
        border-radius: 16px;
        opacity: 1;
      }
      &:hover{
        opacity: 1;
        transform: scale(1.04);
        transition: .1s ease-out;
      }
    }
  }
}
main{
  width: calc(100vw - 320px - 32px);
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(darken($COLOR_THEME, 30%),.2);
  min-height: 100vh;
  float: right;
  position: relative;
  background: $COLOR_BASE;
  $footer_height: 240px;
  padding-bottom: $footer_height+80px;
  @media (max-width: $WIDTH_TAB){
    width: calc(100vw - 32px);
  }
  @media (max-width: $WIDTH_SP){
    width: 100vw;
    margin: 0;
  }
  footer {
    height: $footer_height;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: rgba( $COLOR_THEME, .1);
    text-align: center;
    ul{
      display: flex;
      justify-content: center;
      margin: 80px auto 0;
      a{
        display: block;
        position: relative;
        width: 32px;
        height: 32px;
        margin: 0 8px;
        opacity: .5;
        transition: .2s ease-out;
        &::after{
          content: attr(title);
          display: block;
          pointer-events: none;
          opacity: 0;
          position: absolute;
          bottom: 50%;
          left: calc(50% - 36px);
          width: 72px;
          padding: 1px 0;
          border-radius: 8px;
          color: rgba($COLOR_MAIN,.8);
          font-size: 12px;
          transition: .2s ease;
          background: #fff;
        }
        &:hover{
          opacity: .8;
          &::after{
            opacity: 1;
            bottom: 110%;
          }
        }
      }
      svg{
        width: 32px;
        height: 32px;
        fill: darken($COLOR_THEME,20%);
      }
    }
    p{
      color: darken($COLOR_THEME,20%);
      margin: 24px 0 0;
      opacity: .6;
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoadingView from '@/components/LoadingView.vue';
import ModalView from '@/components/ModalView.vue';
import SnsBlog from '@/assets/icon/sns-blog.vue';
import SnsGithub from '@/assets/icon/sns-github.vue';
import SnsInstagram from '@/assets/icon/sns-instagram.vue';
import SnsNote from '@/assets/icon/sns-note.vue';
import SnsTwitter from '@/assets/icon/sns-twitter.vue';

@Component({
  components: {
    LoadingView,
    ModalView,
    SnsBlog,
    SnsGithub,
    SnsInstagram,
    SnsNote,
    SnsTwitter,
  },
})
export default class App extends Vue {

  // data
  // private loading: boolean = true;

  // lifecycle hook
  private mounted() {
    if (this.$route.query.wid) {
      this.$store.commit('showWorkModal', this.$route.query.wid);
    } else if (this.$route.query.contact) {
      this.$store.commit('showContactModal');
    }
  }
}
</script>
