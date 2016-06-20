import test from 'ava';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {counterIncrement} from '../../../app/actions/clickCounter';
import {COUNTER_INCREMENT} from '../../../app/constants/clickCounter';

const mockStore = configureStore([thunk]);

test('counterIncrement', t => {
  const store = mockStore({count: 0});
  const expectedAction = {
    type: COUNTER_INCREMENT
  };
  const actualAction = store.dispatch(counterIncrement());
  t.deepEqual(actualAction, expectedAction, 'calls correct action type');
});
