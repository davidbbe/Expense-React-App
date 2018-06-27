// import { createStore } from 'redux';

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//       return {
//         count: state.count + incrementBy
//       };
//     case 'DECREMENT':
//     const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy
//       };
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// });

// console.log(store.getState());

// // Actions - than an object that gets sent to the store

// // I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 10
// });

// store.dispatch({
//   type: 'INCREMENT'
// });
// console.log(store.getState());

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5
// });

// // I'd like to reset the count to zero


// console.log(store.getState());


const book = {
  title: 'Ego ksdvkjnsv',
  author: 'Ryan',
  publisher: {
    name: 'Penguin'
  }
};

const {name: pubName = 'Anon' } = book.publisher;

console.log(pubName);