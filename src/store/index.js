import { createStore } from 'redux';
import rootReducer from '../reducers'


const configureStore = (initialState={}, services={}) => {
   const store =  createStore(rootReducer,initialState);
}

export default configureStore;