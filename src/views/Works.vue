<template><main class="panel">

  <div class="content">

    <h2 class="headline en">WORKS</h2>

    <nav class="en tag"><ul>
      <li @click="filter('ALL')">
        <input type="radio" name="tag" id="tag-all" checked><label for="tag-all">ALL</label>
      </li>
      <li @click="filter('UI')">
        <input type="radio" name="tag" id="tag-ui"><label for="tag-ui">UI</label>
      </li>
      <li @click="filter('CODE')">
        <input type="radio" name="tag" id="tag-code"><label for="tag-code">CODE</label>
      </li>
      <li @click="filter('GRAPHIC')">
        <input type="radio" name="tag" id="tag-graphic"><label for="tag-graphic">GRAPHIC</label>
      </li>
      <li @click="filter('OTHER')">
        <input type="radio" name="tag" id="tag-other"><label for="tag-other">OTHER</label>
      </li>
    </ul></nav>

    <ul id="works">
      <p v-if="Object.keys(keys).length==0">URLが間違っているか、タグに一致する作品がありません。</p>
      <li
        v-for="(wid,i) in keys"
        :key="i"
        @click="$store.commit('showWorkModal', wid)"
        :style="`@/assets/works/${wid}/thumbnail.png`"
      >
        <h6>{{$store.state.works[wid].title}}</h6>
      </li>
    </ul>

  </div>

  <Footer />

</main></template>


<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Works extends Vue {

  // props
  @Prop() public query!: any;

  // data
  public keys: string[] = Object.keys( this.$store.state.works );

  // methods
  public filter(filteringTag: string) {
    if ( filteringTag.toUpperCase() === 'ALL' ) {
      this.keys = Object.keys(this.$store.state.works);
    } else {
      this.keys = Object.keys( this.$store.state.works ).filter( (val, i) => {
        if ( this.$store.state.works[val].tag.indexOf(filteringTag.toUpperCase()) >= 0 ) {
          return val;
        }
      });
    }
    history.replaceState('', '', '/works?tag=' + filteringTag.toLowerCase());
  }

  // lifecycle hook
  public mounted() {
    if (this.query.wid) {
      this.$store.commit('showWorkModal', this.$route.query.wid);
    } else if ( this.query.tag ) {
      this.filter(this.query.tag);
      const radio = document.getElementById('tag-' + this.query.tag);
      if (!radio) { return; }
      radio.setAttribute('checked', 'true');
    }
  }

}
</script>


<style lang="scss" scoped>
@import "@/scss/common.scss";
.content{
  width: 800px;
  max-width: calc(100% - 64px);
  @media (max-width: $WIDTH_TAB) {
    width: 640px;
  }
}
.tag{
  margin: 32px auto 0;
  input{
    display: none;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  label{
    display: block;
    min-width: 72px;
    cursor: pointer;
    border-radius: 16px;
    line-height: 1;
    margin: 12px 12px 0 0;
    padding: 16px 16px;
    background: rgba($COLOR_THEME, .2);
    color: rgba($COLOR_MAIN, .6);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  input:checked + label{
    background: $COLOR_THEME;
    color: #fff;
  }
}

#works{
  margin: 36px auto 0;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(20%, 1fr)
  );
  grid-gap: 2px;
  @media (max-width: $WIDTH_TAB){
    grid-template-columns: repeat(
      auto-fit,
      minmax(30%, 1fr)
    );
  }
  @media (max-width: $WIDTH_SP){
    grid-template-columns: repeat(
      auto-fit,
      minmax(40%, 1fr)
    );
  }
  li{
    position: relative;
    background-color: darken($COLOR_BASE, 10%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    cursor: pointer;
    padding-top: 100%; // Hack for Fix aspect
    overflow: hidden;
    transition: .4s ease-out;
    h6{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0; left: 0;
      background: rgba($COLOR_MAIN,.2);
      backdrop-filter: blur(4px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 80% 8px 0;
      vertical-align: middle;
      text-align: center;
      font-size: 16px;
      color: #fff;
      letter-spacing: .05em;
      opacity: 1;
      transition: inherit;
    }
    &:hover{
      transform: scale(1.05);
      transition: .2s ease-out;
      box-shadow: 2px 8px 24px rgba($COLOR_MAIN,.1);
      background-size: 110% 110%;
      z-index: 9800;
      h6{
        opacity: 1;
      }
    }
  }
}
</style>
