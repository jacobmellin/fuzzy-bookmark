import { render } from 'solid-js/web'

import './index.css'
import App from '../popup/App'

const root = document.createElement('div');
root.id = 'fuzzy-bookmark-root';
document.body.appendChild(root)

render(() => <App />, root!)
