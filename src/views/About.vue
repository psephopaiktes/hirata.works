<template><div class="content">

  <h2 class="headline en">ABOUT ME</h2>
  <!-- TODO Twitter Profile画像 右上固定 -->
  <!-- <img src="" alt=""> -->

  <section class="">
    <h3 class="subHeadline">自己紹介</h3>
    <p>平田 章です。都内で猫と暮らすデザイナーです。料理・カラオケ・手品などなにかを作ったり表現することが趣味です。ゲーム・映画・マンガなどコンテンツを消費するのも大好きです。チームで協力して新しいモノを作ったり、企画したりするのが得意です。</p>
  </section>

  <section class="">
    <h3 class="subHeadline">スキルマップ</h3>
    <p>アプリ・サービス開発に携わるデザイナーとして、私の得意分野は以下のようなイメージです。実装・ビジュアライズなど、アウトプットに落とし込むことが得意です。</p>
    <SkillMap class="skillmap" />
    <p>このスキルマップは<b>長谷川恭久</b>氏が提唱する「<a href="https://yasuhisa.com/could/article/product-designer-skillmap/" target="_brank">プロダクトデザイナーのスキルマップ</a>」を参考に作成しました。</p>
  </section>

  <section class="inview">
    <h3 class="subHeadline">UI/UXデザイン</h3>
    <p>モバイルアプリケーションやWebサイトなどの情報設計/画面構築を行い、デザインに落とし込んだり、ドキュメントをまとめることができます。Adobe製品を使用してロゴやモーション制作、イラストの作成も行えます。私自身開発者でもあるため、コンポーネントや実装の都合を考えたデザインが得意です。</p>
  </section>

  <section class="inview">
    <h3 class="subHeadline">Webフロントエンド実装</h3>
    <p>HTML・CSS・Javascriptを用いて、Webサイト・Webサービスのフロントエンド構築を行えます。好きなフレームワークはVue.jsで、本ポートフォリオサイトもVueで作成されています (<a href="https://github.com/psephopaiktes/hirata.works" target="_brank">ソースコード</a>) 。</p>
  </section>

  <section class="inview">
    <h3 class="subHeadline">キャリア</h3>
    <table id="career">
      <tr>
        <th>2009</th><td><h4>高知私立 土佐高等学校 入学</h4></td>
      </tr>
      <tr>
        <th>2011</th><td><h4>筑波大学 情報学群 情報メディア創生学類</h4>入学情報学の基本、デザイン、認知心理学等について学ぶ</td>
      </tr>
      <tr>
        <th>2015</th><td><h4>同大学院 図書館情報メディア研究科 入学</h4>クラウドソーシングを用いたコンテンツ生成について研究</td>
      </tr>
      <tr>
        <th>2017</th><td><h4>株式会社 U-NEXT 入社</h4>UI/UXデザイナー、フロントエンドエンジニアとして勤務</td>
      </tr>
    </table>
  </section>

</div></template>


<style scoped lang="scss">
@import "@/scss/common.scss";

.inview{
  transition: .6s ease-out;
  opacity: 0;
  transform: translateY(100px);
  &.view{
    opacity: 1;
    transform: translateY(0);
  }
}

#career{
  margin-top: 12px;
  border-collapse: separate;
  border-spacing: 0px 16px;
  line-height: 1.4;
  th{
    vertical-align: top;
    text-align: left;
    padding-right: 12px;
    border-right: 2px solid;
    font-weight: 500;
  }
  td{
    font-weight: auto;
    padding-left: 12px;
    h4{
      font-weight: 700;
    }
  }
}
.skillmap{
  margin: 24px 16px 12px;
  box-shadow: 0 4px 32px rgba(darken($COLOR_THEME, 30%),.1);
  @media (max-width: $WIDTH_SP){
    margin: 12px -8px 0;
    box-shadow: 0 2px 16px rgba(darken($COLOR_THEME, 30%),.1);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SkillMap from '@/assets/skillmap.vue';

@Component({
  components: {
    SkillMap,
  },
})
export default class About extends Vue {

  // lifecycle hook
  public mounted() { checkInView(); }

}

const checkInView = () => {
  const elements = document.getElementsByClassName('inview');
  if (!elements) { return; }
  const num = window.innerHeight - 100;
  Array.prototype.forEach.call( elements, (el: any, i: number) => {
    if ( el.getBoundingClientRect().top < num ) {
      el.classList.add('view');
    } else {
      el.classList.remove('view');
    }
  });
};

checkInView();
window.addEventListener('scroll', () => {
  checkInView();
});
</script>
