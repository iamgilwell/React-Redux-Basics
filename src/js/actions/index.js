import { ADD_ARTICLE, CONTACT_US, LOAD_POST, ALL_ROOMS } from "../constants/action-types"

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