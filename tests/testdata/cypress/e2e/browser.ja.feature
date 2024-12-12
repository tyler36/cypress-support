# language: ja
フィーチャ: Browser Step Definitions
  シナリオ: Remove Sticky Header
    前提 "/browser.html"にアクセスします
    ならば "header"セレクターには、"position"に"sticky"に設定されている必要があります
    もし 固定ヘッダーを無効にします
    ならば "header"セレクターには、"position"に"relative"に設定されている必要があります
