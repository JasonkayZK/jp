var posts=["2025/08/05/文法-1-～です・〜じゃありません/","2025/08/05/文法-2-〜ます・〜ません/","2025/07/30/新しい旅をつづく！/","2025/07/31/読み-1-僕の夢/","2025/08/05/読み-2-超短編小説『最後の火花』/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };