import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {setAuthToken, refreshAuthToken} from './actions/auth';
import {loadAuthToken} from './local-storage';

import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import questionReducer from './reducers/questions';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        question: questionReducer,
        protectedData: protectedDataReducer
    }), 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
