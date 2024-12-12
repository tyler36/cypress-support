# language: ja
フィーチャ: Interactions Step Definitions
  シナリオ: It clicks a selector
    前提 "/interactions.html"にアクセスします
    ならば "main [js-test='click']"に"updated"を見るべきではありません
    もし "main [js-test='click']"をクリックします
    ならば "main [js-test='click']"に"updated"を見る必要があります
  シナリオ: It clicks text
    前提 "/interactions.html"にアクセスします
    ならば "main [js-test='click']"に"updated"を見るべきではありません
    もし テキスト"clickable"をクリックします
    ならば "main [js-test='click']"に"updated"を見る必要があります
  シナリオ: It clicks text in a selector
    前提 "/interactions.html"にアクセスします
    ならば "footer [js-test='click']"に"updated"を見るべきではありません
    かつ "main [js-test='click']"に"updated"を見るべきではありません
    もし "footer"のテキスト"clickable"をクリックします
    ならば "footer [js-test='click']"に"updated"を見る必要があります
    かつ "main [js-test='click']"に"updated"を見るべきではありません
  シナリオ: It checks checkbox selector
    前提 "/interactions.html"にアクセスします
    ならば "checkbox"入力はチェックされません
    もし "checkbox"をチェックします
    ならば "checkbox"入力がチェックされます
  シナリオ: It selects a form option
    前提 "/interactions.html"にアクセスします
    ならば "[name='fruit']"は"apple"値を持っている必要があります
    もし "[name='fruit']"で"banana"を選択します
    ならば "[name='fruit']"は"banana"値を持っている必要があります
  シナリオ: It types text into input
    前提 "/interactions.html"にアクセスします
    ならば "[name='email']"は"example@example.com"値を持たないはずです
    もし "email"に"example@example.com"と入力します
    ならば "[name='email']"は"example@example.com"値を持っている必要があります
  シナリオ: It scrolls the page
    前提 "/interactions.html"にアクセスします
    かつ "#toTop"セレクターは非表示にする必要があります
    もし "500"ピクセルスクロールします
    ならば 待機"1000"ミリ秒
    ならば "#toTop"セレクターが表示されている必要があります
    もし "-500"ピクセルスクロールします
    ならば 待機"1000"ミリ秒
    かつ "#toTop"セレクターは非表示にする必要があります
  シナリオ: It scrolls a selector
    前提 "/interactions.html"にアクセスします
    ならば "#privacy-confirmed"セレクターは非表示にする必要があります
    もし ".privacy"の"bottom"までスクロールします
    ならば 待機"1000"ミリ秒
    ならば "#privacy-confirmed"セレクターが表示されている必要があります
