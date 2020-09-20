import * as ActionTypes from './ActionTypes';
// import { DISHES } from "../shared/dishes";
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, comment, author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }

});

//FOR DISHES PROTIONS

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return (
        fetch(baseUrl + 'dishes')
            .then(res => res.json())
            .then(dishes => dispatch(addDishes(dishes)))
    );

}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

//FOR COMMENTS SECTION

export const fetchComments = () => (dispatch) => {
    return (
        fetch(baseUrl + 'comments')
            .then(res => res.json())
            .then(comments => dispatch(addComments(comments)))
    );

}
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

//FOR PROMOTION SECTION

export const fetchPromos = () => (dispatch) => {

    dispatch(promoLoading(true));

    return (
        fetch(baseUrl + 'promotions')
            .then(res => res.json())
            .then(promotions => dispatch(addPromo(promotions)))
    );
}

export const promoLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promoFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromo = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});