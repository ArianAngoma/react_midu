import {useCallback, useReducer} from "react";

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
            }

        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }

        default:
            return state
    }
}

export default function useForm({initialKeyword, initialRating}) {
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
    })

    const {keyword, rating} = state;

    const updateKeyword = useCallback((keyword) => {
        dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: keyword})
    }, [])

    const updateRating = useCallback((rating) => {
        dispatch({type: ACTIONS.UPDATE_RATING, payload: rating})
    }, [])

    return {
        keyword,
        rating,
        updateKeyword,
        updateRating
    }
}
