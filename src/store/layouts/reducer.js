import { toast } from "react-toastify";
import {
    GET_LAYOUT,
    API_RESPONSE_ERROR,
    API_RESPONSE_SUCCESS,
    UPDATE_LAYOUT_SUCCESS,
    UPDATE_LAYOUT_ERROR,
    UPDATE_INTERNAL_LAYOUT,
} from "./actionTypes";

let INIT = {
    // Sidebar options
    isSidebarOpenedDefault: false,
    isSidebarOpened: false,

    isDrawerOpened: true,
    isDrawerOpenedDefault: false,

    error: null,
};

const reducer = (state = INIT, action) => {
    switch (action.actionType) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_LAYOUT:
                    return action.payload.data;

                default:
                    return state;
            }

        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_LAYOUT:
                    return {
                        ...state,
                        error: action.payload.error,
                    };

                default:
                    return state;
            }

        case UPDATE_INTERNAL_LAYOUT:
            return {
                ...state,
                ...action.payload,
            };

        case UPDATE_LAYOUT_SUCCESS:
            toast.success(action.payload);
            return state;

        case UPDATE_LAYOUT_ERROR:
            toast.error(action.payload);
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
