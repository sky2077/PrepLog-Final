import axios from 'axios';
import {TOPIC_REQUEST,
    TOPIC_SUCCESS,
    TOPIC_FAIL,
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_FAIL,
    CLEAR_ERRORS
} from '../constants/topicConstants';

// Get topics

export const getTopics = () => async(dispatch) => {

    try {
        dispatch({ type: TOPIC_REQUEST });

        const {data} = await axios.get('/api/v1/topics');

        dispatch({
            type: TOPIC_SUCCESS,
            payload: data.topics
        })

    } catch (error) {
        dispatch({
            type: TOPIC_FAIL,
            payload: error.response.data.message
        })
    }
}


// Get questions

export const getQuestions = () => async(dispatch) => {

    try {
        dispatch({ type: QUESTION_REQUEST });

        const {data} = await axios.get('/api/v1/questions');

        dispatch({
            type: QUESTION_SUCCESS,
            payload: data.questions
        })

    } catch (error) {
        dispatch({
            type: QUESTION_FAIL,
            payload: error.response.data.message
        })
    }
}


// clear errors

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}