import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import history from './history';

const Root = () => (
    <HashRouter history={history}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.unregister();
