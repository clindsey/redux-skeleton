import test from 'ava';

import clickCounterReducer from '../../../app/reducers/clickCounter';

test('clickCounterReducer', t => {
  t.not(undefined, clickCounterReducer, 'exists');
});
