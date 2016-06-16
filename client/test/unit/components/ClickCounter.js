import test from 'ava';
import sinon from 'sinon';
import {noop} from '../../utils';
import {Simulate} from 'react-addons-test-utils';
import {render} from 'react-dom';

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import ClickCounterComponent from '../../../app/components/ClickCounter';

test('basic UI elements', t => {
  const clickCounterComponent = renderStatic({
    count: 0,
    counterIncrement: noop
  });
  t.true(clickCounterComponent.includes('btn'));
  t.true(clickCounterComponent.includes('click-counter__count'));
});

test('default count of 0', t => {
  const clickCounterComponent = renderStatic({
    count: 0,
    counterIncrement: noop
  });
  t.true(clickCounterComponent.includes(renderToStaticMarkup(
    <h3 className="click-counter__count">{'0'}</h3>
  )));
});

test('new count of 9', t => {
  const clickCounterComponent = renderStatic({
    count: 9,
    counterIncrement: noop
  });
  t.true(clickCounterComponent.includes(renderToStaticMarkup(
    <h3 className="click-counter__count">{'9'}</h3>
  )));
});

test('counterIncrement callback', t => {
  const counterIncrement = sinon.spy();
  const div = renderToDiv({
    count: 0,
    counterIncrement
  });
  const button = div.querySelector('button');
  Simulate.click(button);
  t.true(counterIncrement.calledOnce);
});

function renderStatic (props) {
  return renderToStaticMarkup(
    <ClickCounterComponent {...props} />
  );
}

function renderToDiv (props) {
  const div = document.createElement('div');
  render(
    <ClickCounterComponent {...props}>
      {props.children}
    </ClickCounterComponent>
  , div);
  return div;
}
