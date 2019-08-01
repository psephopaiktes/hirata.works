<template><div class="content">

  <h2 class="headline en">ABOUT ME</h2>

  <h3 class="subHeadline">自己紹介</h3>
  <p>平田 章です。都内で猫と暮らすUIデザイナーです。料理・カラオケ・手品などなにかを作ったり表現することが趣味です。ゲーム・映画・マンガなどコンテンツを消費するのも大好きです。チームで協力して新しいモノを作ったり、企画したりするのが得意です。</p>

  <h3 class="subHeadline">UI/UXデザイン</h3>
  <p>モバイルアプリケーションやWebサイトなどの情報設計/画面構築を行い、デザインに落とし込んだり、ドキュメントをまとめることができます。Adobe製品を使用してロゴやモーション制作、イラストの作成も行えます。私自身開発者でもあるため、コンポーネントや実装の都合を考えたデザインが得意です。</p>

  <h3 class="subHeadline">Webフロントエンド</h3>
  <p>HTML・CSS・Javascriptを用いて、Webサイト・Webサービスのフロントエンド構築を行えます。好きなフレームワークはVue.jsで、本ポートフォリオサイトもVueで作成されています。いわゆる「フロントエンドエンジニア」よりは「クリエイティブコーダー」よりです。</p>

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

</div></template>


<style scoped lang="scss">
@import "@/scss/common.scss";

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
</style>
