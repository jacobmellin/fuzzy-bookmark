import { render } from 'solid-js/web'
import { createSignal } from 'solid-js';

import Wrapper from './Wrapper';
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
console.log('in ifrmae');

 render(() => <Wrapper visible={visible()} children={AddBookmark} />, root!)
