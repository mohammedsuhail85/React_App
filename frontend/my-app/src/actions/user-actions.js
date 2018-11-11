import { FETCH_USER_DETAILS, SUCCESS_USER_INPUTS, SUBMIT_USER_DETAILS, FAILURE_USER_INPUTS } from './action-types';

export const fetchUserData = () => dispatch => {
    dispatch({
        type: FETCH_USER_DETAILS,
        payload: 'value',
    })
}

export const submitRegister = (formValue) => dispatch => {
    dispatch({
        type: SUBMIT_USER_DETAILS,
        payload: formValue,
    });
}

export const validationSuccess = () => dispatch => {
    dispatch({
        type: SUCCESS_USER_INPUTS,
        payload: true,
    });
}

export const validationFailure = () => dispatch => {
    dispatch({
        type: FAILURE_USER_INPUTS,
        payload: false,
    })
}