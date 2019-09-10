<template><div>

  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button>

  <h2 class="en">CONTACT</h2>
  <p>ご連絡はSNSにてお願いいたします。</p>
  <ul>
    <li><a href="https://twitter.com/psephopaiktes" target="brank_">Twitter</a></li>
    <li><a href="https://www.facebook.com/psephopaiktes" target="brank_">Facebook</a></li>
  </ul>

  <h3>仕事のご依頼について</h3>
  <p>現在就職活動は行っておりません。請負もしくは委任契約による、仕事のご依頼は適宜相談にお乗りします。ロゴやUIなどのデザイン制作、Webフロントのコーディング、イベントでの登壇等を受け付けております。</p>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ModalContentContact extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
button{
  position: absolute;
  top: 0; left: 0;
  width: 44px; height: 44px;
  background: $COLOR_MAIN;
  color: #fff;
  i{
    font-size: 32px;
    line-height: 44px;
  }
}
div{
  text-align: center;
}
h2{
  font-weight: 600;
  letter-spacing: .05em;
}
h3{
  font-size: 1em;
  margin-top: 32px;
  opacity: .8;
}
p{
  max-width: 33em;
  margin: 8px auto 0;
}
ul{
  display: flex;
  justify-content: center;
  li{
    margin: 8px 16px 0;
    &::before{
      content: "arrow_right";
      font-family: "Material Icons Outlined";
      margin-right: 4px;
      font-size: 20px;
      vertical-align: -.2em;
    }
  }
  a{
    color: darken($COLOR_THEME,10%);
    font-size: 1.1em;
    letter-spacing: .02em;
  }
}
</style>
