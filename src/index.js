import store from './customStore';
import * as actions from './actions';

store.dispatch(actions.bugAdded('New bug'));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
