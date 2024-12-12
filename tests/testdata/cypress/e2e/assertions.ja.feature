# language: ja
フィーチャ: Assertions Step Definitions
  シナリオ: elements
    前提 "/elements.html"にアクセスします
    ならば "h1"セレクターが表示されるはずです
    かつ ".foobar"セレクターが表示されないはずです
    ならば I should see "Elements Title" in "h1"
    ならば "h1"に"Elements Title"を見る必要があります
    かつ "h1"に"Foobar Title"を見るべきではありません
    ならば "input[name='email']"は"example@example.com"値を持っている必要があります
    かつ "input[name='email']"は"user@example.com"値を持たないはずです
    ならば "input[name='email']"セレクターが表示されている必要があります
    かつ "input[type='hidden']"セレクターは非表示にする必要があります
    ならば "https://github.com/tyler36/cypress-support"へのリンクが表示されます
    かつ "https://github.com/tyler36/cypress-support/missing"へのリンクは表示されません
    ならば タイトルには"Elements page"を含める必要があります
    かつ the description should be "Page for testing assertion commands."
    かつ 説明は"Page for testing assertion commands."でなければなりません
    かつ the "author" metaName should be "John Doe"
    かつ メタ名"author"は"John Doe"を含める必要があります
    かつ the "author" metaProp should be "John Doe"
    かつ メタプロパティ"author"は"John Doe"を含める必要があります
    ならば I should see a script with src="example.js"
    ならば スクリプト"example.js"が存在するはずです

  シナリオ: string
    前提 "/elements.html"にアクセスします
    ならば I should see "Elements Title"
    ならば "Elements Title"が見えるはずです
    かつ I should not see "Copyright 2010"
    かつ "Copyright 2010"は表示されません

  シナリオ: It tests URLs
    前提 "/elements.html"にアクセスします
    ならば パスは"/elements.html"に等しくなければなりません
    かつ パスは"/users"に等しくてはいけません
    ならば パスには"elements"を含める必要があります
    かつ パスは"user"と等しくてはいけません

  シナリオ: It tests status codes
    もし "/"をリクエストすると、"200"ステータス コードが返されるはずです
    もし "/invalid"をリクエストすると、"404"ステータス コードが返されるはずです
