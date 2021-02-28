import { createStore } from 'redux';
import restaurantsReducer from '../reducers/restaurants';

const store = createStore(restaurantsReducer);

// store.subscribe(() => {
//     console.log('store data:', store.getState());
// });

export default store;