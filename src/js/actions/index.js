import { ADD_ARTICLE, CONTACT_US, LOAD_POST, ALL_ROOMS, DATA_LOADED, DATA_REQUESTED } from "../constants/action-types"

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function contactUS(payload) {
    return {
        type: CONTACT_US,
        payload
    }
}

export function loadPosts(payload) {
    return {
        type: LOAD_POST,
        payload
    }
}

export function allRooms(payload) {
    return {
        type: ALL_ROOMS,
        payload
    }
}

// export function getData() {
//     return function (dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: DATA_LOADED, payload: json });
//             });
//     };
// }

export function getData() {
    return { type: DATA_REQUESTED }
}