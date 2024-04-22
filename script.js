var script=document.createElement('script');
script.src='https://rawgit.com/paulirish/memory-stats.js/master/bookmarklet.js';
document.head.appendChild(script);

(function(){function q(){var a=document.createElement("div");a.setAttribute("class",r);document.body.appendChild(a);setTimeout(function(){document.body.removeChild(a)},100)}function l(a){var b=a.offsetHeight;a=a.offsetWidth;return b>t&&b<u&&a>v&&a<w}function x(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;a=b;return a>=m&&a<=y+m}function n(){for(var a=document.getElementsByClassName(e),b=new RegExp("\b"+e+"\b");0<a.length;)a[0].className=a[0].className.replace(b,"")}var t=30,v=30,u=350,w=350, e="mw-harlem_shake_me",p=["im_drunk","im_baked","im_trippin","im_blown"],r="mw-strobe_light",y=function(){var a=document.documentElement;return window.innerWidth?window.innerHeight:a&&!isNaN(a.clientHeight)?a.clientHeight:0}();var%20m=window.pageYOffset?window.pageYOffset:Math.max(document.documentElement.scrollTop,document.body.scrollTop);for(var%20f=document.getElementsByTagName(%22*%22),h=null,c=0;c%3Cf.length;c++){var%20d=f[c];if(l(d)&&x(d)){h=d;break}}if(null===d)console.warn(%22Could%20not%20find%20a%20node%20of%20the%20right%20size.%20Please%20try%20a%20different%20page.%22);%20else{(function(){var%20a=document.createElement(%22link%22);a.setAttribute(%22type%22,%22text/css%22);a.setAttribute(%22rel%22,%22stylesheet%22);a.setAttribute(%22href%22,%22https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css%22);a.setAttribute(%22class%22,%22mw_added_css%22);document.body.appendChild(a)})();(function(){var%20a=document.createElement(%22audio%22);a.setAttribute(%22class%22,%22mw_added_css%22);a.src=%22https://s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3%22;a.loop=!1;a.addEventListener(%22canplay%22,%20function(){setTimeout(function(){h.className+=%22%20%22+e+%22%20im_first%22},500);setTimeout(function(){n();q();for(var%20b=0;b%3Cg.length;b++)g[b].className+=%22%20%22+e+%22%20%22+p[Math.floor(Math.random()*p.length)]},15500)},!0);a.addEventListener(%22ended%22,function(){n();for(var%20b=document.getElementsByClassName(%22mw_added_css%22),k=0;k%3Cb.length;k++)document.body.removeChild(b[k])},!0);a.innerHTML=%22%20%3Cp%3EIf%20you%20are%20reading%20this,%20it%20is%20because%20your%20browser%20does%20not%20support%20the%20audio%20element.%20We%20recommend%20that%20you%20get%20a%20new%20browser.%3C/p%3E%20%3Cp%3E%22;%20document.body.appendChild(a);a.play()})();var%20g=[];for(c=0;c%3Cf.length;c++)d=f[c],l(d)&&g.push(d)}})();(function(){var%20$jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return%20a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return%20a};var%20incrementingNum=0,colors=%22red%20orange%20yellow%20green%20blue%20purple%20pink%22.split(%22%20%22);setInterval(function(){6%3C=incrementingNum?incrementingNum=0:incrementingNum++;for(var%20a=document.querySelectorAll(%22div%22),b=0;b%3Ca.length;b++)a[b].style.backgroundColor=colors[incrementingNum],a[b].style.transition=%22background-color%201s%22},1E3);try{var%20audio=document.createElement(%22audio%22);audio.src=%22http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3%22;audio.loop=!0;audio.play()}catch(a){console.log(%22Unable%20to%20play%20audio.%22)}var%20css=%22\nhtml,%20body%20{\n\tcursor:%20url(%27data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wLZ7vH/2u/z/////wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Ah1wdf8ncnz/O217/ypwff8tc4D/JnN8/zJwcv////8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wI0eoT/K32F/y10fv8qcXv/LnB7/ytteP8sdn7/O4yT/zR6ff////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8CJ3qA/y1/h/8xeYP/J254/ypxe/8xeIL/KXB6/ydkbv8oYGv/KHJ4/zKQjv////8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Aj5xdf8ueYH/L3mF/yp5gv8yf5D/NXqM/yZykP8kcI3/L3eI/zhwdv8teXb/MIOE/z2RjP////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8CL32H/y+BhP8zhIn/MH+c/1yZy/9co8f/T5y4/02atv9jr9P/orTe/zmOk/86mJj/NZ+a/zSMh/////8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Aj2Dif8ugIX/L4GG/y5+l/9jo9f/AAkS/0E8ef9ARYP/RkyW/1ZTk/8PIlT/Zrbe/zOfmv85naH/Oa2n/0h/fv////8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CKnh//zKDiP87jJH/XaTZ/wMKCP9MUY7/R1SH/0RIff9JS3P/OUVs/zo6Zv8AAgb/fbjv/zamp/82rK7/LbKp/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Ajx/gP83iY//L3+H/yx8lP8qUXX/IBwp/x4jMv8VFyH/EhEN/xYPGP8WDxT/GQ8R/w0GAP8RJSv/MZqq/zKnq/8zt7v/uN3Z/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CKoSI/ziMl/80hYz/PYmv/wcHAf8SFRr/GSQ0/wgcJ/9vlq3/g6ix/7Pd8P9oj57/UXqM/y8tPv88dZj/PrG2/zSst/9sqqX/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0h4n/MoqP/y2EjP9MjrT/ESMg/yVDY/8lT2v/V5ai/0tujf8jR2b/Hz9x/yBJdP8gbpL/Lai7/zOkqv80pKv/N5eg/ziwqf////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Aj2Okf8ygYf/LXyD/yJXc/8iNkf/ETRW/xc7Z/8hVX7/XKjD/1DQyv8+yM//T9bk/0XK1P83ws3/MK64/yFoe/81jZf/Hq6j/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8CL5WR/yl5gP8YUl//MoKR/zSSlv84q6v/Nrm7/ze1s/8zoKT/JmBt/yNecf87m6z/PLrI/zG2x/8ukZ3/J15u/ziepv8/q6v/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wI0jov/L4aL/yxve/8ZTWH/J2p6/zmKl/8ziZf/J2dz/xc2Pv8fQ0v/Ildt/xpYcf8ZOD7/F1BW/y1wff8xqbP/MLm//0C4t/////8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wIwj5P/MYKK/yZrdf8hW2f/IUxb/x08SP8QIC//MWl0/z+Kpv80nrn/NaG7/zSdof80qq3/SbzH/0TG1P8sxMv/Ks7G/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////AjKloP81l53/N5mf/zaXof85mKL/IFpm/zR4gv87i5T/Laez/0m1x/9avdH/Mb2//zO3vP89ydD/PdTa/zPh5P810cr/////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8CTKif/ziztP8ys73/LL/K/yjI0v8nv8f/Jo6V/0LBx/85x8//PNXc/z3N0P8HU2L/GTVc/32NpP9rmab/N5+k/////wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wLH+PH/QcTA/z7GzP8tgYn/YnmL/xUUNv+Wv8z/MFJe/z2Wnv87t8L/IW1w/yRMU/8PLDb/ED5J/z6NkP9Bq7D/KKyx/////wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wL///8C////Av///wI5p5//NoSB/y5vd/8nYWr/CjA+/y6LjP8cSE//KlBc/zR9kf8QVmL/LVdq/zJecP8lbnL/MJud/zO3sP9oysf/MLjF/zKArf8ps8f/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Av///wL///8CKIOX/zGluf9Al5j/KoeG/y12fv8sX2//KFRd/zRVZf8ni6P/Mq3B/0rI3P9t2ev/SbPB/y9Tc/86bYT/////Av///wJkkJf/Ls7K/yHN0f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8qma//HVh3/0egvv9Zu77/////Ake6rv8zlo//PJaX/zyZmv8oen7/H3iQ/z3V6/822Ob/JNPf/zfd5v8n1dj/O8nQ/zbKx/////8C////Av///wJD4PH/////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/zKfsP8tn6//PsjE/////wL///8C////AjGvov8mXHP/MVd5/0Kcuv8i1db/Jtfe/yHb4f8z4+r/M+Dm/yTf4/8/x8//levn/////wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////Aiewx/////8C////Av///wL///8CicvJ/zS7tf8yxML/NMLG/yXV2/8p2eT/Nd/t/0Dh8P8x3ej/I93l/xzg1f////8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/////wL///8CftrL/zLKyv8i2db/INfd/yLX4/803u7/K9nk/yLk5P8S3tT/////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////AmnQz/8c18v/QNfU/zHf3f8K5Nb/////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wL///8C////Av///wIAAAAAAAAAAAAAAAAAAAAA//////////////////5////wH///4A///8AH//+AA///gAH//wAA//8AAP/+AAB//gAAf/4AAH/+AAB//gAAf/4AAH//AAB//wAAf/8AAP//AAB/94AAD/cAAY/wQAHf8OAB//XgA//wMAf///wf//////////////////////8=%27),%20auto;\n}%22,style=document.createElement(%22style%22);style.innerHTML=css;document.head.appendChild(style);css=%22\n@keyframes%20roll%20{\n%20%20100%{\n%20%20%20%20transform:rotate(360deg)\n%20%20}\n}\nbody%20{\n%20%20animation-name:%20roll;\n%20%20animation-duration:%204s;\n%20%20animation-iteration-count:%201;\n}\n%22;style=document.createElement(%22style%22);style.innerHTML=css;document.head.appendChild(style);})();(function(){var%20elems=document.getElementsByTagName(%22*%22);for(var%20i%20=%200;%20i%3Celems.length;i++){elems[i].style.fontFamily=%22Comic%20Sans%20MS%22;elems[i].style.fontSize=Math.random()*75+%22px%22;elems[i].style.color=%27#'+Math.random().toString(16).slice(2,%208);elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();document.onclick=function(){(function(){var%20d=0;setInterval(function(){document.body.style['-webkit-transform']=%20'rotate('+%20d%20+'deg)';d+=1},100)}());};(function()%20{var%20bluroffspeed=1000;%20var%20bluronspeed=2000;%20function%20bluron()%20{%20(function%20()%20{%20document.body.style.filter%20=%20'blur(5px)';%20})();%20function%20bluroff(){%20(function%20()%20{%20document.body.style.filter%20=%20'blur(0px)';%20})();%20}%20setTimeout(bluroff,bluroffspeed);%20}%20setInterval(bluron,bluronspeed);})();(function(){var%20opt%20=%200.1;%20var%20pen%20=%20'block';%20var%20size%20=%2010;%20var%20clr%20=%20%22blue%22;%20var%20rate%20=%200.005;%20var%20userrate=3;%20function%20mousemove(event)%20{%20var%20x%20=%20event.clientX;%20var%20y%20=%20event.clientY;%20x=x-8;%20y=y-8;%20(function()%20{%20var%20elem%20=%20document.createElement('div');%20var%20body%20=%20document.getElementsByTagName('body')[0];%20body.appendChild(elem);%20elem.style.position%20=%20'fixed';%20elem.style.top%20=%20''%20+%20y%20+%20'px';%20elem.style.left%20=%20''%20+%20x%20+%20'px';%20elem.style.margin%20=%20'10px';%20elem.style.paddingTop%20=%20'10px';%20elem.style.width%20=%20''%20+%20size%20+%20'px';%20elem.style.height%20=%20''%20+%20size%20+%20'px';%20elem.style.zIndex%20=%2010000;%20elem.style.opacity%20=%20opt;%20elem.style.color%20=%20''%20+%20clr%20+%20'';%20elem.style.backgroundColor%20=%20''%20+%20clr%20+%20'';%20elem.style.border%20=%20'0px%20solid%20white';%20elem.style.textAlign%20=%20'center';%20elem.id%20=%20'paint';%20elem.style.display%20=%20''%20+%20pen%20+%20'';%20elem.innerText%20=%20'';%20function%20repeat()%20{%20elem.style.opacity%20=%20elem.style.opacity%20-%20rate;%20}%20setInterval(repeat,%2015);%20}());%20}%20window.addEventListener('mousemove',%20mousemove);})();(function(){var%20style%20=%20document.createElement(%22style%22);document.body.appendChild(style);var%20canvas%20=%20document.createElement(%22canvas%22);canvas.id%20=%20%22canvas%22;document.body.appendChild(canvas);var%20context%20=%20canvas.getContext(%222d%22);function%20outlineBounds()%20{context.clearRect(0,%200,%20window.innerWidth,%20window.innerHeight);context.beginPath();var%20bounds%20=%20Array.from(document.querySelectorAll(%22*%22)).map(function%20(e)%20{return%20e.getBoundingClientRect();});var%20withinBounds%20=%20bounds.filter(function%20(e)%20{var%20viewVertical%20=%20window.scrollY%20%3C%20e.bottom%20||%20e.top%20%3C%20window.scrollY%20+%20window.innerHeight;var%20viewHorizontal%20=%20window.scrollX%20%3C%20e.right%20||%20e.left%20%3C%20window.scrollX%20+%20window.innerWidth;return%20viewVertical%20&&%20viewHorizontal;});withinBounds.forEach(function%20(e)%20{context.rect(e.left,e.top,e.right%20-%20e.left,e.bottom%20-%20e.top);});context.stroke();}function%20fillBounds()%20{context.clearRect(0,%200,%20window.innerWidth,%20window.innerHeight);context.fillStyle%20=%20%22#00000011%22;var%20bounds%20=%20Array.from(document.querySelectorAll(%22*%22)).map(function%20(e)%20{return%20e.getBoundingClientRect();});var%20withinBounds%20=%20bounds.filter(function%20(e)%20{var%20viewVertical%20=%20window.scrollY%20%3C%20e.bottom%20||%20e.top%20%3C%20window.scrollY+window.innerHeight;var%20viewHorizontal=window.scrollX%3Ce.right||e.left%3Cwindow.scrollX+window.innerWidth;return%20viewVertical%20&&%20viewHorizontal;});withinBounds.forEach(function%20(e)%20{context.fillRect(e.left,e.top,e.right%20-%20e.left,e.bottom%20-%20e.top);});}function%20resizeCanvas()%20{style.innerHTML%20=%20%60#canvas%20{position:%20fixed;left:%200;top:%200;width:%20100%;height:%20100%;z-index:%209999;pointer-events:%20none;}%60;canvas.width%20=%20window.innerWidth;canvas.height%20=%20window.innerHeight;fillBounds();}resizeCanvas();window.addEventListener(%22scroll%22,%20fillBounds);window.addEventListener(%22resize%22,%20resizeCanvas);var%20pixelSize%20=%208;var%20halfPixel%20=%20Math.floor(pixelSize%20/%202);function%20drawPixel(x,%20y,%20r,%20g,%20b,%20a)%20{context.fillStyle%20=%20%22rgba(%22%20+%20[r,%20g,%20b,%20a].join(%22,%20%22)%20+%20%22)%22;context.fillRect(x%20-%20halfPixel,%20y%20-%20halfPixel,%20pixelSize,%20pixelSize);}function%20distanceSquared(a,%20b)%20{var%20dx%20=%20b.x%20-%20a.x;var%20dy%20=%20b.y%20-%20a.y;return%20dx%20*%20dx%20+%20dy%20*%20dy;}function%20main(mouse)%20{fillBounds();var%20data%20=%20context.getImageData(0,%200,%20context.canvas.width,%20context.canvas.height).data;context.clearRect(0,%200,%20context.canvas.width,%20context.canvas.height);for%20(var%20x%20=%200;%20x%20%3C%20context.canvas.width;%20x%20+=%20pixelSize)%20{for%20(var%20y%20=%200;%20y%20%3C%20context.canvas.height;%20y%20+=%20pixelSize)%20{var%20pixel%20=%20{%22x%22:%20x,%20%22y%22:%20y};var%20intensityMouse%20=%201%20/%20distanceSquared(pixel,%20mouse);var%20colorMouse%20=%20{%22r%22:%200,%20%22g%22:%20255,%20%22b%22:%20255};var%20copy%20=%20{%22x%22:%20window.innerWidth%20-%20mouse.x,%20%22y%22:%20window.innerHeight%20-%20mouse.y};var%20intensityCopy%20=%201%20/%20distanceSquared(pixel,%20copy);var%20colorCopy%20=%20{%22r%22:%20255,%20%22g%22:%200,%20%22b%22:%200};var%20intensity%20=%20intensityMouse%20+%20intensityCopy;var%20color%20=%20{%22r%22:%20Math.floor((colorMouse.r%20*%20intensityMouse%20+%20colorCopy.r%20*%20intensityCopy)%20/%20intensity),%22g%22:%20Math.floor((colorMouse.g%20*%20intensityMouse%20+%20colorCopy.g%20*%20intensityCopy)%20/%20intensity),%22b%22:%20Math.floor((colorMouse.b%20*%20intensityMouse%20+%20colorCopy.b%20*%20intensityCopy)%20/%20intensity)};if%20(intensity%20%3E%200.000001)%20{var%20ha%20=%20256%20*%20intensity%20*%20(256%20-%20data[(x%20+%20y%20*%20window.innerWidth)%20*%204%20+%203]);drawPixel(x,%20y,%20Math.floor(color.r%20*%20ha),%20Math.floor(color.g%20*%20ha),%20Math.floor(color.b%20*%20ha),%201%20-%20ha);}}}}window.addEventListener(%22mousemove%22,%20main);})();document.addEventListener(%22click%22,%20e%20=%3E%20{%20e.stopPropagation();%20e.preventDefault();%20},%20true);
function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.cursor="none";}}a(document);
window.addEventListener("keydown", function(key){window.print();});
window.addEventListener("click", function(click){window.print();});
