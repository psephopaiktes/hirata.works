# hirata.works

[![Netlify Status](https://api.netlify.com/api/v1/badges/9d8a050c-e111-4407-b1f1-dc9048e2f5b3/deploy-status)](https://app.netlify.com/sites/hirata/deploys)

My portofolio site. 
URL: [hirata.works](http://hirata.works/)

## TASK
- [] ブクマク確認
- [] Vue 3 → Vue Cliが対応したらゼロから作り直す
  - [ ] Contentful と netlify form
- [ ] CSS設計
  - SIDEBAR_WIDTHとかも変数化
  - EASINGは?
  - Shadowも変数化、[複数のを組み合わす](https://tobiasahlin.com/blog/layered-smooth-box-shadows/)
  - importじゃなくてuse使う
- [ ] Scrollイベントの撤去、ICSに変更
- [ ] やっぱスライドショーいらないかも
  - めくられない
  - ホームは作品グリットおすすめのみっつくらちおく
  - 詳細はスクロールで置けるようにしたいなあ
- [ ] HeroBG イラレで作る
  - 正方形、幅'100%で縦に繰り返す
  - iPhoneでは下をグラデで隠す
  - アイコンちりばめ?
- [ ] 画像
  - ホーム,Works用サムネイル 正方形 640*640 1枚
  - Detail スライドショー用 画像  1200*800 1枚~

- [ ] HOME
  - パララックス
  - ヴァリアブルフォント
  - アニメーション
  - HOME→ABOUTの遷移失敗してる
- [ ] OGPの作成
- [ ] WorksDetailの実装
  - 中身の用意。数減らして質上げる。
    - Mvpものせる
    - ぽすとーく、kooootakeのやつhirata.worksに追加
    - https://koooootake.com/
    - Togemp
  - Viemeo埋め込み
- [ ] 画像の読み込み表現
  - unext.co.jpチェック！
- [ ] アニメーション例
    画面いつぱいきいろに1文字ずつサイト名
        トップだけ常に。アバウトとかは表示しない。
    画面ごとカバーアップしてサイト表示される
    画面は途中でとまりヘッダに。ロゴは上まで消えた後、上からふってくる
- [ ] スマホ実機対応厳密に
- 各ページにうざくないレベルでド派手なアニメーションほしいかも。
  - それようのDIV作る覚悟で...
  - AE→連番PNG
  
## Develop
```
npm start
```

## Build
```
npm runn Build
```
