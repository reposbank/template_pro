(window.MIP=window.MIP||[]).push({name:"mip-stats-google",func:function(){define("mip-stats-google/mip-stats-google",["require","zepto","customElement"],function(e){function t(){for(var e=document.querySelectorAll("*[data-stats-google-obj]"),t=0;t<e.length;t++){var a=e[t].getAttribute("data-stats-google-obj");if(!a)return;try{a=JSON.parse(decodeURIComponent(a))}catch(e){return}var r=a.type;if(!a.data)return;var o=i(a.data);if("click"!==r&&"mouseup"!==r&&"load"!==r)return;if(n(e[t]).hasClass("mip-stats-eventload"))return;if(n(e[t]).addClass("mip-stats-eventload"),"load"===r)window._gaq.push(o);else e[t].addEventListener(r,function(e){var t=this.getAttribute("data-stats-google-obj");if(t){var n;try{n=JSON.parse(decodeURIComponent(t))}catch(e){return}if(n.data){i(n.data).forEach(function(e){window._gaq.push(e)})}}},!1)}}function i(e){if(e){var t=e.slice(1,e.length-1).replace(/\s/g,"").split("],["),i=[];return t.forEach(function(e,t){var n=e.split(",");i.push(n)}),i}}var n=e("zepto"),a=e("customElement").create();return a.prototype.createdCallback=function(){var e=this.element,a=e.getAttribute("token"),r=e.getAttribute("setconfig");if(a){if(window._gaq=window._gaq||[],window._gaq.push(["_setAccount",a]),r){i(decodeURIComponent(r)).forEach(function(e){window._gaq.push(e)})}window._gaq.push(["_trackPageview"]);var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://ssl.google-analytics.com/ga.js",n(e).append(o),o.onload=function(){t()}}},a}),define("mip-stats-google",["mip-stats-google/mip-stats-google"],function(e){return e}),function(){function e(e,t){e.registerMipElement("mip-stats-google",t)}if(window.MIP)require(["mip-stats-google"],function(t){e(window.MIP,t)});else require(["mip","mip-stats-google"],e)}()}});