(window.MIP=window.MIP||[]).push({name:"mip-52dus-bdwmext",func:function(){define("mip-52dus-bdwmext/mip-52dus-bdwmext",["require","customElement"],function(e){"use strict";function n(){var e=/(android|webos|iphone|ipad|blackberry|mobile|opera*mini|htc|nokia|huawei|samsung|wap|phone)/i,n=navigator.userAgent;if(null==n)return!0;if(null==e.exec(n))return!1;else return!0}var a=e("customElement").create();return a.prototype.build=function(){var e=this.element,a=e.getAttribute("domain"),d=e.getAttribute("pctoken"),t=e.getAttribute("waptoken"),i=document.createElement("script");if(a&&t){if(n())i.src=document.location.protocol+"//"+a+"/"+t+".js";else if(d)i.src=document.location.protocol+"//"+a+"/"+d+".js";else return;e.appendChild(i)}else console.error("请输入正确的 domain 或者 token")},a}),define("mip-52dus-bdwmext",["mip-52dus-bdwmext/mip-52dus-bdwmext"],function(e){return e}),function(){function e(e,n){e.registerMipElement("mip-52dus-bdwmext",n,"")}if(window.MIP)require(["mip-52dus-bdwmext"],function(n){e(window.MIP,n)});else require(["mip","mip-52dus-bdwmext"],e)}()}});