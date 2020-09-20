import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { Leaders } from './Leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { initialFeedbacks } from './Forms';


export const configStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initialFeedbacks
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}