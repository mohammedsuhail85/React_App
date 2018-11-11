import { FETCH_USER_DETAILS, SUCCESS_USER_INPUTS, SUBMIT_USER_DETAILS, FAILURE_USER_INPUTS } from '../actions/action-types';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_DETAILS:
            return {
                ...state,
                sampleUserDetails: '',
            }
        case SUBMIT_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            }
        case SUCCESS_USER_INPUTS:
            return {
                ...state,
                validation: action.payload,
            }
        case FAILURE_USER_INPUTS:
            return {
                ...state,
                validation: action.payload,
            }
        default:
            return state;
    }
}