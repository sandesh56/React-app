import { createStore, combineReducers } from 'redux';
import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { Leaders } from './Leaders';

export const configStore = () => {
    const store = createStore(
        combineReducers({

            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
            comments: Comments
        })
    );
    return store;
}