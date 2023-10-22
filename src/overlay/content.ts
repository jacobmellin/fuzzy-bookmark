const iframe = document.createElement('iframe');
const div = document.createElement('div');

iframe.src = chrome.runtime.getURL('src/overlay/index.html');
//iframe.style = `
//    position: fixed;
//    z-index: 10000;
//    top: 0;
//    left: 0;
//    bottom: 0;
//    right: 0;
//    width: 100vw;
//    height: 100vh;
//`

console.log(iframe.src);

document.documentElement.append(div);
div.append(iframe);


