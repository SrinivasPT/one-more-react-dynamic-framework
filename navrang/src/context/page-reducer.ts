import { PageActionType, PageState } from "../types";

const setValueForKey = (state: PageState, key: string, value: any) => {
    const nodes = key.split(".");
    let element: any = {};

    try {
        for (let i = 0; i < nodes.length; i++) {
            if (i === nodes.length - 1) {
                element = state.data.current[nodes[i]];
            } else if (i < nodes.length - 1) {
                element = element[nodes[i]];
            } else {
                element = element[nodes[i]];
            }
        }
    } catch (error) {
        console.error(error);
    }
};

const PageReducer = (state: PageState, action: any) => {
    switch (action.type) {
        case PageActionType.SET_INITIAL_STATE:
            state.formConfig = action.payload.formConfig;
            state.data.original = action.payload.data;
            state.data.current = action.payload.page ?? action.payload.data;
            state.uiState.isLoading = false;
            break;
        case PageActionType.SET_STATE_FOR_KEY:
            setValueForKey(state, action.payload.dataKey, action.payload.value);
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
