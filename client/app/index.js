import 'bootstrap-webpack!./vendor/bootstrap.config.js';
import './stylesheets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './stores/configureStore';
import {Provider} from 'react-redux';

import config from './config';
import App from './containers/App';
import Home from './containers/Home';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route
          component={App}
          path={`/${config.locationRoot}`}
      >
        <IndexRoute
            component={Home}
        />
        <Route
            component={Home}
            path={':name'}
        />
      </Route>
    </Router>
  </Provider>
, document.getElementById('js-app'));
