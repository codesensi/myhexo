var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="w(ﾟДﾟ)w 嗨呀！404啦！",clearTimeout(titleTime)):(document.title="♪(^∇^*)嘿嘿！骗你哒~"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));