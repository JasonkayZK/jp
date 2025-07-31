var posts=["2025/07/30/新しい旅をつづく！/","2025/07/31/読み-1-僕の夢/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };