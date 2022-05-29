
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
 var ieversion=new Number(RegExp.$1)
 if (ieversion>=8)
     // Para IE8
     document.getElementsByTagName('html')[0].className+='ie8';
 else if (ieversion>=7)
     // Para IE7
     document.getElementsByTagName('html')[0].className+='ie7';
 else if (ieversion>=6)
     // Para IE6
     document.getElementsByTagName('html')[0].className+='ie6';
}
