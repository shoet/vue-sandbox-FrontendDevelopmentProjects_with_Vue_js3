<script setup lang="ts">
</script>

<template>
  <div class="header">
    <div class="header__icon">
      東京都
    </div>
    <p header__subtitle>新型コロナウイルス感染症<br>対策サイト</p>
  </div>

  <div class="info-expand">
    <!-- 東京都からのお知らせ アコーディオン -->
    <!-- #TODO -->
  </div><!-- /.info-expand -->

  <div class="site-info">
    <a href="" class="site-info__title">サイト情報</a>
    <a href="#" class="site-info__item">当サイトについて</a>
    <a href="#" class="site-info__item">ご意見はこちら（外部サービスを使用しています）</a>
    <a href="#" class="site-info__item">お問合せ先一覧</a>
    <a href="#" class="site-info__item">サイトマップ</a>
  </div> <!-- site-info -->

  <div class="footer">

    <ul class="link-icon-list">
      <li class="link-icon-list__item">Line</li>
      <li class="link-icon-list__item">Twitter</li>
      <li class="link-icon-list__item">facebook</li>
    </ul> <!-- link-icon-list -->

    <p class="footer__notice">
      このサイトの内容物は、<br>
      <a href="#">クリエイティブ・コモンズ 表示4.0 ライセンス</a>
      のもとに提供されています（ただし商標などのほか団体が権利を持つものは除く）。
    </p> <!-- footer__notice -->

    <div class="footer__icon">
      <div class="icon"></div>
      <div class="icon__body">
        <div class="icon__text-main">
          GOOD DESIGN AWARD
        </div>
        <div class="icon__text-sub">
          2020年度受賞
        </div>
      </div>
    </div> <!-- footer__icon -->

  </div> <!-- footer -->
</template>

<style scoped>
.header {
  height: 200px;
  margin-bottom: 50px;
}
.header__icon {
  font-size: 2rem;
  color: gray;
}
.header__subtitle {
  font-size: 1rem;
  color: gray;
}
</style>