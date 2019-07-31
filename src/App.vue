<template>
  <div id="app">

    <ModalView />

    <nav>
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
      <footer>
        <ul>
          <li>
            <a href="https://twitter.com/psephopaiktes" target="brank_">T</a>
          </li>
          <li>
            <a href="https://hirata.blog/" target="brank_">B</a>
          </li>
          <li>
            <a href="https://note.mu/psephopaiktes" target="brank_">N</a>
          </li>
          <li>
            <a href="https://www.instagram.com/psephopaiktes/" target="brank_">I</a>
          </li>
          <li>
            <a href="https://github.com/psephopaiktes/" target="brank_">G</a>
          </li>
        </ul>
        <p>
          <small>© Akira HIRATA 2019</small>
        </p>
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
  font-family: "Avenir Next", "Avenir Neue", "Avenir", Futura, "Century Gothic",
    "Helvetica Neue", Helvetica, Roboto, Arial, Sans-serif;
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
    }
    a.router-link-exact-active{
      font-weight: 600;
      opacity: 1;
    }
    i{
      vertical-align: text-top;
      margin-right: 8px;
    }
    button{
      width: 160px;
      height: 48px;
      line-height: 48px;
      border-radius: 24px;
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
  padding-bottom: $footer_height;
  footer {
    width: 100%;
    height: calc($footer_height + 200px);
    position: absolute;
    bottom: 0;
    background: rgba(#fff,.4);
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
