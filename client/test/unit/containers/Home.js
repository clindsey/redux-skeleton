import test from 'ava';
import {noop} from '../../utils';

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import {Home as HomeContainer} from '../../../app/containers/Home';

test('default greeting', t => {
  const homeContainer = renderStatic({
    name: undefined,
    clickCounter: {count: 0},
    counterIncrement: noop
  });
  t.true(homeContainer.includes(renderToStaticMarkup(
    <h1>{'Hello, World!'}</h1>
  )));
});

test('custom greeting', t => {
  const homeContainer = renderStatic({
    name: '5625463739',
    clickCounter: {count: 0},
    counterIncrement: noop
  });
  t.true(homeContainer.includes(renderToStaticMarkup(
    <h1>{'Hello, 5625463739!'}</h1>
  )));
});

function renderStatic (props) {
  return renderToStaticMarkup(
    <HomeContainer {...props} />
  );
}
