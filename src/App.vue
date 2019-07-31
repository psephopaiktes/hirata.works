<template>
  <div id="app">

    <ModalView />

    <nav class="en">
      <h1><router-link to="/">Akira HIRATA</router-link></h1>
      <ul>
        <li><router-link to="/">
          <i class="material-icons-outlined">home</i>Home
        </router-link></li>
        <li><router-link to="/about">
          <i class="material-icons-outlined">person</i>About
        </router-link></li>
        <li><router-link to="/works">
          <i class="material-icons-outlined">widgets</i>Works
        </router-link></li>
        <li><button @click="$store.commit('showContactModal')">
            <i class="material-icons-outlined">send</i>Contact
        </button></li>
      </ul>
    </nav>

    <main>
      <router-view />
      <footer class="en">
        <ul>
          <li><a href="https://twitter.com/psephopaiktes" target="brank_">T</a></li>
          <li><a href="https://hirata.blog/" target="brank_">B</a></li>
          <li><a href="https://note.mu/psephopaiktes" target="brank_">N</a></li>
          <li><a href="https://www.instagram.com/psephopaiktes/" target="brank_">I</a></li>
          <li><a href="https://github.com/psephopaiktes/" target="brank_">G</a></li>
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

nav {
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
    color: darken($COLOR_THEME, 40%);
  }
  h1{
    width: 180px;
    text-align: right;
    font-size: 24px;
  }
  ul{
    width: 180px;
    font-size: 20px;
    margin-top: 16px;
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
      margin-top: 24px;
      background: $COLOR_BASE;
      color: darken($COLOR_THEME, 15%);
      opacity: .9;
      box-shadow: 0 16px 32px rgba(darken($COLOR_THEME, 30%),.5);
      font-size: 20px;
      &:hover{
        opacity: 1;
        transform: scale(1.04);
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
    background: darken($COLOR_BASE, 4%);
    text-align: center;
    ul{
      display: flex;
      justify-content: center;
      margin: 80px auto 0;
      a{
        background: #000;
        display: block;
        width: 32px;
        height: 32px;
        margin: 0 8px;
        opacity: .5;
        &:hover{
          opacity: .8;
        }
      }
    }
    p{
      margin: 24px 0 0;
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalView from '@/components/ModalView.vue';

@Component({
  components: {
    ModalView,
  },
})
export default class App extends Vue {
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
