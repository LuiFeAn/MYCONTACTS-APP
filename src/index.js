import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './lib/event-manager';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
