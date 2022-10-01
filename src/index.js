import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// create a default object to store the information from the client feedback forms into redux.
const feedbackInfo = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments: '',
}

// reducer for feedback forms, default state is equal to the previously defined object.
const feedbackReducer = (state = feedbackInfo, action) => {
    // use a switch statement to detemine what to do with state and action per action.type.
    switch (action.type) {
        case 'ADD_FEELING':
            // payload will be a number as a string value type.
            // using the Number method to ensure values are stored as numbers.
            return {...state.feeling = Number(state.feeling) + Number(action.payload)};
        case 'ADD_UNDERSTANDING':
            return {...state.understanding = Number(state.feeling) + Number(action.payload)};
        case 'ADD_SUPPORTED':
            return {...state.supported = Number(state.supported) + Number(action.payload)};
        case 'ADD_COMMENTS':
            // action.payload will be a string data type.
            return {...state.comments = action.payload};
        case 'CLEAR_FEEDBACK':
            // return feedback to its default state.
            return feedbackInfo;
        default:
            return state;
    }
}

// create a store to access the reducers in other components.
const storeInstance = createStore(
    // using combineReducers incase more reducers are added later.
    combineReducers(
        feedbackReducer
    ),
    // utilize logger for managing state.
    applyMiddleware(logger)
);

ReactDOM.render(
    //  set a store instance for accessing data.
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
