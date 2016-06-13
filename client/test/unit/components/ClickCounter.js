import test from 'ava';
import React from 'react';
import {JSX} from 'jsx-test-helpers';

import {ClickCounter} from '../../../app/components/ClickCounter';

test('clickCounterAction', t => {
  t.not(undefined, ClickCounter, 'exists');
});
