<template><footer class="en">

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

</footer></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SnsBlog from '@/assets/icon/sns-blog.vue';
import SnsGithub from '@/assets/icon/sns-github.vue';
import SnsInstagram from '@/assets/icon/sns-instagram.vue';
import SnsNote from '@/assets/icon/sns-note.vue';
import SnsTwitter from '@/assets/icon/sns-twitter.vue';

@Component({
  components: {
    SnsBlog,
    SnsGithub,
    SnsInstagram,
    SnsNote,
    SnsTwitter,
  },
})
export default class Footer extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
footer {
  height: 240px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba( $COLOR_THEME, .1);
  text-align: center;
  ul{
    display: flex;
    justify-content: center;
    margin: 80px auto 0;
    @media (max-width: $WIDTH_SP){
      margin: 56px auto 0;
    }
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
</style>
