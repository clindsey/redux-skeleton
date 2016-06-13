import test from 'ava';

import {counterIncrement} from '../../../app/actions/clickCounter';

test('clickCounterAction', t => {
  t.not(undefined, counterIncrement, 'exists');
});
