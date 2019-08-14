import { createStore ,applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import view from './viewModule';
import modal from './modalModule';
const reducer = combineReducers({
    view,
    modal,
});

export default function configureStore(preloadedState){
    return createStore(
        reducer,
        preloadedState,
        compose (
            applyMiddleware(thunk),
            typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ 
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
        )
    )
}