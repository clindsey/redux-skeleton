import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

import './reducers/clickCounter';
import './actions/clickCounter';
import './components/ClickCounter';
import './containers/App';
import './containers/Home';
