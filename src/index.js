import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class RootApp extends Component {
    render() {
        return (<BrowserRouter>
            <App />
        </BrowserRouter>)
    }
}

ReactDOM.render(<RootApp />, document.getElementById('root'));
registerServiceWorker();
