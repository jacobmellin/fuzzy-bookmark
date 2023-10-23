const container = document.createElement('div');
const span = document.createElement('span');
const iframe = document.createElement('iframe');

iframe.src = chrome.runtime.getURL('src/overlay/index.html');
iframe.setAttribute('allowtransparency', 'true');

const shadowRoot = container.attachShadow({ mode: 'closed' });

let shadowStyle = document.createElement('style');
shadowStyle.textContent = `
iframe {
    border: none;
    position:fixed;
    height:578px;
    top:50%;
    left:50%;
    width:75vw;
    transform:translate(-50%, -50%);
    border-radius:10px;
    box-shadow:0 0 20px rgba(0,0,0,0.5);
    z-index:2147483647;
}
iframe > span {
    display:contents;
}
`
shadowRoot.append(shadowStyle);

shadowRoot.append(span);
span.append(iframe);

let overlayAppended = false;
let iframeVisible = false;

function appendOverlay() {
    document.documentElement.append(container);
    overlayAppended = true;
}

function toggleVisible() {
   if(!overlayAppended) {
       appendOverlay();
   }
   if(iframeVisible) {
        iframe.style.display = 'none';
        iframeVisible = false;
   } else {
       iframe.style.display = 'block';
       iframeVisible = true;
   }
}

chrome.runtime.onMessage.addListener((message) => {
    if(message.hasOwnProperty('command')
        && message.command === 'add-bookmark') {
            toggleVisible();
    }
});

// Listen for keys being pressed
document.addEventListener('keyup', (event) => {
    if(event.key === 's') {
        toggleVisible();  
    }
    if(iframeVisible && event.key === 'Escape') {
        toggleVisible();
    }
});

