import store from './store';
import { bugAdded, bugResolved, bugRemoved } from './store/actions';

//Subscribes to the store and logs current state after actions:
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

//Logs current state:
console.log('0 bugs to begin:', store.getState());

//Adds 4 bugs:
console.log('\n', 'Adds 4 bugs:');
store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugAdded('Bug 2'));
store.dispatch(bugAdded('Bug 3'));
store.dispatch(bugAdded('Bug 4'));

//Marks 2 bugs as resolved:
console.log('\n', 'Marks 2 bugs as resolved:');
store.dispatch(bugResolved(2));
store.dispatch(bugResolved(4));

//Removes 2 bugs:
console.log('\n', 'Removes 2 bugs:');
store.dispatch(bugRemoved(1));
store.dispatch(bugRemoved(2));

//Logs current state:
console.log('\n', 'Bug 3 and 4 are left:');
console.log(store.getState());

console.log('\n');