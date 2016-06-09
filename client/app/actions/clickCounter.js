import {COUNTER_INCREMENT} from '../constants/clickCounter';

export function counterIncrement () {
  return (dispatch) => {
    return dispatch({
      type: COUNTER_INCREMENT
    });
  };
}
