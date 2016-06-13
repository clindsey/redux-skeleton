import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

import './reducers/clickCounter';
import './actions/clickCounter';
import './components/ClickCounter';
