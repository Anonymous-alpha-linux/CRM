import {
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
    GET_LAYOUT,
    UPDATE_LAYOUT_SUCCESS,
    UPDATE_LAYOUT_ERROR,
    UPDATE_INTERNAL_LAYOUT,
} from "./actionTypes";

export const apiResponseSuccess = (actionType, layoutAPIResponse) => {
    return {
        actionType: API_RESPONSE_SUCCESS,
        payload: { actionType, data: layoutAPIResponse },
    };
};

export const apiResponseError = (actionType, error = null) => {
    return {
        actionType: API_RESPONSE_ERROR,
        payload: { actionType, error: error || "Get Admin Layout Failed" },
    };
};

export const getLayouts = () => {
    return {
        actionType: GET_LAYOUT,
    };
};

export const updateLayout = (newLayoutState) => {
    return {
        actionType: UPDATE_INTERNAL_LAYOUT,
        payload: newLayoutState,
    };
};

export const updateLayoutApiSuccess = (message = null) => {
    return {
        actionType: UPDATE_LAYOUT_SUCCESS,
        payload: message || "Update Layout Success",
    };
};

export const updateLayoutApiFailure = (error = null) => {
    return {
        actionType: UPDATE_LAYOUT_ERROR,
        payload: error || "Update Layout Failed",
    };
};

export const updateInternalLayout = (newState) => {
    return {
        actionType: UPDATE_INTERNAL_LAYOUT,
        payload: newState,
    };
};
