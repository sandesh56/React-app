import * as ActionTypes from './ActionTypes';
// import { DISHES } from "../shared/dishes";
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};

//FOR DISHES PROTIONS

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return (
        fetch(baseUrl + 'dishes')
            .then(res => {
                if (res.ok) {
                    return res;
                } else {
                    var error = new Error("Error" + res.status + " :" + res.statusText);
                    error.res = res;
                    throw error;
                }
            }, error => {
                var errmess = new Error(error.message);
                throw errmess;

            })
            .then(res => res.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))

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
            .then(res => {
                if (res.ok) {
                    return res;
                } else {
                    var error = new Error("Error" + res.status + " :" + res.statusText);
                    error.res = res;
                    throw error;
                }
            }, error => {
                var errmess = new Error(error.message);
                throw errmess;

            })
            .then(res => res.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)))

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
            .then(res => {
                if (res.ok) {
                    return res;
                } else {
                    var error = new Error("Error" + res.status + " :" + res.statusText);
                    error.res = res;
                    throw error;
                }
            }, error => {
                var errmess = new Error(error.message);
                throw errmess;

            })
            .then(res => res.json())
            .then(promotions => dispatch(addPromo(promotions)))
            .catch(error => dispatch(promoFailed(error.message))) //BAKI XAA SAME TALAKO

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