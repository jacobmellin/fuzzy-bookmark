import { render } from 'solid-js/web'
import { createSignal } from 'solid-js';

import AddBookmark from './AddBookmark';

const [visible, setVisible] = createSignal(false);

chrome.runtime.onMessage.addListener((message) => {
    if(message.hasOwnProperty('command')
        && message.command === 'add-bookmark') {
        setVisible(!visible());
    }
});

setVisible(false);

const root = document.getElementById('root');

 render(() => <AddBookmark />, root!)
