import _ from "lodash";
import { PageAction, PageState } from "../types";

const PageReducer = (state: PageState, action: any) => {
    switch (action.type) {
        case PageAction.SET_INITIAL_STATE:
            state.formConfig = action.payload.formConfig;
            state.data.original = action.payload.data;
            state.data.current = action.payload.page ?? action.payload.data;
            state.domain = action.payload.domain;
            state.uiState.isLoading = false;
            break;
        case PageAction.SET_STATE_FOR_KEY:
            _.set(state.data.current, action.payload.dataKey, action.payload.value);
            break;
        case PageAction.REFRESH_DATA:
            state.data.original = action.payload.data;
            state.data.current = action.payload.page ?? action.payload.data;
            break;
        case PageAction.SET_ACTIONS:
            state.actions = action.payload;
            break;
        case PageAction.SUBMIT:
            state.uiState.showErrors = true;
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default PageReducer;
