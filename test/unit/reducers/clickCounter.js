import test from 'ava';

import clickCounterReducer from '../../../app/reducers/clickCounter';
import {COUNTER_INCREMENT} from '../../../app/constants/clickCounter';

test('default state', t => {
  const state = clickCounterReducer(undefined, {type: ''});
  t.is(state.count, 0, 'count of 0');
});

test('increment from 0', t => {
  const state = clickCounterReducer(undefined, {type: COUNTER_INCREMENT});
  t.is(state.count, 1, 'count of 1');
});

test('increment from previous state', t => {
  const state = clickCounterReducer({count: 11}, {type: COUNTER_INCREMENT});
  t.is(state.count, 12, 'count of 12');
});
