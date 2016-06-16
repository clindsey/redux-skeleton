import test from 'ava';

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import {App as AppContainer} from '../../../app/containers/App';

test('is a bootstrap container', t => {
  const appContainer = renderStatic({});
  t.true(appContainer.includes('container'));
});

function renderStatic (props) {
  return renderToStaticMarkup(
    <AppContainer {...props} />
  );
}
