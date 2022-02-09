import {TOPIC_REQUEST,
    TOPIC_SUCCESS,
    TOPIC_FAIL,
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_FAIL,
    CLEAR_ERRORS
} from '../constants/topicConstants';

export const topicReducer = (state = { topics:[] } , action) => {
    switch (action.type) {
        case TOPIC_REQUEST:
            return {
                loading: true,
                topics:[]
            }
        
        case TOPIC_SUCCESS: 
            return {
                ...state,
                loading: false,
                topics: action.payload
            }

        case TOPIC_FAIL:
            return {
                loading: false,
                topics: null,
                error: action.payload
            }

        case CLEAR_ERRORS: 
                return {
                    ...state,
                    error: null
                }
        default:
            return state;
    }
}


export const questionReducer = (state = { questions:[] } , action) => {
    switch (action.type) {
        case QUESTION_REQUEST:
            return {
                loading: true,
                questions:[]
            }
        
        case QUESTION_SUCCESS: 
            return {
                ...state,
                loading: false,
                questions: action.payload
            }

        case QUESTION_FAIL:
            return {
                loading: false,
                questions: null,
                error: action.payload
            }

        case CLEAR_ERRORS: 
                return {
                    ...state,
                    error: null
                }
        default:
            return state;
    }
}
