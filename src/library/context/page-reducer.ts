import _ from "lodash";
import { PageActionType, PageState } from "../types";

const PageReducer = (state: PageState, action: any) => {
    switch (action.type) {
        case PageActionType.SET_INITIAL_STATE:
            state.formConfig = action.payload.formConfig;
            state.data.original = action.payload.data;
            state.data.current = action.payload.page ?? action.payload.data;
            state.uiState.isLoading = false;
            break;
        case PageActionType.SET_STATE_FOR_KEY:
            _.set(state.data.current, action.payload.dataKey, action.payload.value);
            break;
        case PageActionType.REFRESH_DATA:
            state.data.original = action.payload.data;
            state.data.current = action.payload.page ?? action.payload.data;
            break;
        case PageActionType.SET_ACTIONS:
            state.actions = action.payload;
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default PageReducer;
