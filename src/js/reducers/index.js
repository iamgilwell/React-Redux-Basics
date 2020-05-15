import { ADD_ARTICLE, CONTACT_US, ALL_ROOMS, DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    contactus: {
        firstName: ['Gilwell', 'Muhati', 'Okoth'],
        lastName: '',
        phoneNumber: '',
        yourMessage: ''

    },
    rooms: [{
        roomName: "RoomA",
        details: {
            "Occupants": "2",
            "Available": "Yes",
            "price": "22000"
        }
    },
    {
        roomName: "RoomB",
        details: {
            "Occupants": "2",
            "Available": "Yes",
            "price": "22000"
        }
    },
    {
        roomName: "RoomC",
        details: {
            "Occupants": "2",
            "Available": "Yes",
            "price": "22000"
        }
    },
    {
        roomName: "RoomD",
        details: {
            "Occupants": "2",
            "Available": "Yes",
            "price": "22000"
        }
    },
    {
        roomName: "RoomB",
        details: {
            "Occupants": "2",
            "Available": "Yes",
            "price": "22000"
        }

    }]
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    if (action.type === CONTACT_US) {
        return Object.assign({}, state, {
            contact: {
                ...state.contactus,
                [action.payload.firstName]: action.payload.firstName
            }
        })
    }
    if (action.type === ALL_ROOMS) {
        return Object.assign({}, state, {
            rooms: {
                ...state.rooms,
                [action.payload.roomName]: action.payload.roomName
            }
        })
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    // if (action.type === DATA_LOADED) {
    //     return Object.assign({}, state, {
    //         remoteArticles: state.remoteArticles.concat(action.payload)
    //     })
    // }
    return state;
}

export default rootReducer