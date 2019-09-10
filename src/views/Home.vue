<template><main class="panel" v-scroll="showPanel">

  <section id="hero">
    <div class="copy en">
      <h1>Akira HIRATA</h1>
      <p>is a Digital Product Designer,</p>
      <p>and Web Front-end Engineer.</p>
    </div>
    <img class="portrait" src="@/assets/portrait.png" alt="平田のポートレート写真">
  </section>

  <ul id="grid"></ul>

  <Footer />

</main></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {

  // methods
  public showPanel(): void {
    const panel = document.getElementsByClassName('panel')[0];
    if (!panel) { return; }
    if (window.pageYOffset === 0) {
      panel.classList.remove('show');
    } else {
      panel.classList.add('show');
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
.panel{
  background-color: $COLOR_THEME;
  transition: background-color .8s ease-in-out;
  /* 他のTranstionには要注意 */
  /* 要塞検討 */
}
.show{
  background-color: $COLOR_BASE;
  transition: background-color .8s ease-in-out;
}

#hero{
  position: relative;
  margin: 5vw 4vw 0 4vw;
  height: calc(100vh - 10vw - 32px);
  border: 1vw solid rgba($COLOR_BASE,.8);
  background-color: rgba($COLOR_THEME,.4);
  @media (max-width: $WIDTH_TAB) {
    margin: 2vw 4px 0;
    height: 60vw;
    border: 1.5vw solid rgba($COLOR_BASE,.8);
  }
  @media (max-width: $WIDTH_SP) {
    padding-top: 1px;
    margin: 0;
    height: auto;
    border: none;
  }
  .copy{
    position: absolute;
    text-align: right;
    top: 36%;
    right: 6vw;
    color: #fff;
    z-index: 999;
    text-shadow: 0 0 3vw rgba($COLOR_MAIN,.1);
    line-height: 1.4;
    h1{
      font-size: 4.8vw;
      letter-spacing: .15em;
    }
    p{
      font-size: 2.4vw;
      letter-spacing: .1em;
    }
    @media (max-width: $WIDTH_TAB) {
      right: 7vw;
      h1{
        font-size: 6.4vw;
      }
      p{
        font-size: 3.2vw;
      }
    }
    @media (max-width: $WIDTH_SP) {
      position: static;
      text-align: left;
      width: 85vw;
      margin: 48px auto 0;
      h1{
        font-size: 11vw;
        letter-spacing: .1em;
      }
      p{
        font-size: 5.2vw;
      }
    }
  }
  .portrait{
    display: block;
    height: calc(100vh - 8vw - 32px);
    position: absolute;
    bottom: 0px;
    left: 2vw;
    @media (max-width: $WIDTH_TAB) {
      height: 63vw;
      left: 2.5vw;
    }
    @media (max-width: $WIDTH_SP) {
      opacity: .9;
      position: static;
      margin: 16px 15vw 0 5vw;
      width: 80vw;
      height: auto;
    }
  }
}

#grid{
  position: relative;
  width: calc(100% - 304px);
  height: 800px;
  margin: -48px auto 0;
  background: #fff;
  box-shadow: 0 0 32px rgba(darken($COLOR_THEME, 30%),.2);
  @media (max-width: $WIDTH_SP) {
    width: calc(100% - 64px);
    margin: -16px auto 0;
  }
}
</style>
