const originFetch = fetch;
Object.defineProperty(window, "fetch", {
  configurable: true,
  enumerable: true,
  get() {
    return (url,options) => {
		// 拦截获取面板地址的api并替换为自己的地址
		if(!url.includes("api/v1")){
			url = "https://xyun888.oss-cn-beijing.aliyuncs.com/config.json"
		}
		// 阻止反盗版上报
		if(url.includes("fake")){
			alert(url);
			while(1){}
		}
    return originFetch(url,options)
	}
  }
});

//改登录页面的标题和应用运行时的名称
window.addEventListener('DOMContentLoaded',()=>{
	document.querySelector("title").innerText="X云加速"
})

window.$crisp = [];
window.CRISP_WEBSITE_ID = ""; // 填写 Crisp ID
(function () {
  d = document;
  s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();