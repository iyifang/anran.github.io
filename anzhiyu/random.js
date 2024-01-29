var posts=["2023/01/25/butterfly主题配置一/","2024/01/17/hello-world/","2023/04/04/Anzhiyu主题搭建/","2022/11/04/butterfly主题配置二/","2022/11/28/hexo博客部署到腾讯云服务器/","2022/10/29/主题配置遇到的一些问题/","2024/01/19/面试题一/","2022/11/06/添加看板娘/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };