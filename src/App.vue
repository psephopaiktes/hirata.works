<template>
  <div id="app">

    <ModalView />

    <LoadingView v-show="loading" />

    <nav class="en" id="globalNav">
      <h1><router-link to="/">Akira HIRATA</router-link></h1>
      <ul>
        <li><router-link to="/">
          <i class="material-icons-outlined">home</i>HOME
        </router-link></li>
        <li><router-link to="/about">
          <i class="material-icons-outlined">person</i>ABOUT
        </router-link></li>
        <li><router-link to="/works">
          <i class="material-icons-outlined">widgets</i>WORKS
        </router-link></li>
        <li><button @click="$store.commit('showContactModal')">
            <i class="material-icons-outlined">send</i>CONTACT
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
  }
  ul{
    width: 200px;
    font-size: 18px;
    margin-top: 96px;
    li{
      text-align: right;
      margin-top: 16px;
    }
    a{
      color: $COLOR_BASE;
      opacity: .6;
      font-weight: 300;
      &:hover{
        opacity: 1;
      }
      &.router-link-exact-active{
        font-weight: 600;
        opacity: 1;
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
      background: $COLOR_BASE;
      color: darken($COLOR_THEME, 20%);
      opacity: .9;
      box-shadow: 0 16px 32px rgba(darken($COLOR_THEME, 30%),.5);
      font-size: 18px;
      font-weight: 500;
      transition: .3s ease-out;
      &:hover{
        opacity: 1;
        transform: scale(1.04);
        transition: .1s ease-out;
      }
    }
  }
}
main{
  width: calc(100vw - 320px);
  min-height: 100vh;
  float: right;
  position: relative;
  background: $COLOR_BASE;
  $footer_height: 240px;
  padding-bottom: $footer_height+80px;
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
        width: 32px;
        height: 32px;
        margin: 0 8px;
        opacity: .5;
        transition: .2s ease-out;
        &:hover{
          opacity: .8;
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
