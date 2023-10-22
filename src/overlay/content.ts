const container = document.createElement('span');
const span = document.createElement('span');
const iframe = document.createElement('iframe');

iframe.src = chrome.runtime.getURL('src/overlay/index.html');

console.log(iframe.src);

document.documentElement.append(container);
const shadowRoot = container.attachShadow({ mode: 'closed' });

let shadowStyle = document.createElement('style');
shadowStyle.textContent = `
    iframe {
        border: none;
        width:100vw;
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        pointer-events:none;
        user-select:none;
    }
`
shadowRoot.append(shadowStyle);


shadowRoot.append(span);
span.append(iframe)
