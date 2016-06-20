import {COUNTER_INCREMENT} from '../constants/clickCounter';

function defaultClickCounterState () {
  return {
    count: 0
  };
}

export default function clickCounter (state = defaultClickCounterState(), action) {
  if (action.type === COUNTER_INCREMENT) {
    return Object.assign({}, {count: state.count++}, state);
  }
  return state;
}
