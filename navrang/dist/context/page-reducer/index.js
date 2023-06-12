import { PageActionType } from '../../types/context-types/index.js';

var setValueForKey = function (state, key, value) {
    var nodes = key.split(".");
    var element = {};
    try {
        for (var i = 0; i < nodes.length; i++) {
            if (i === nodes.length - 1) {
                element = state.data.current[nodes[i]];
            }
            else if (i < nodes.length - 1) {
                element = element[nodes[i]];
            }
            else {
                element = element[nodes[i]];
            }
        }
    }
    catch (error) {
        console.error(error);
    }
};
var PageReducer = function (state, action) {
    var _a, _b;
    switch (action.type) {
        case PageActionType.SET_INITIAL_STATE:
            state.formConfig = action.payload.formConfig;
            state.data.original = action.payload.data;
            state.data.current = (_a = action.payload.page) !== null && _a !== void 0 ? _a : action.payload.data;
            state.uiState.isLoading = false;
            break;
        case PageActionType.SET_STATE_FOR_KEY:
            setValueForKey(state, action.payload.dataKey, action.payload.value);
            break;
        case PageActionType.REFRESH_DATA:
            state.data.original = action.payload.data;
            state.data.current = (_b = action.payload.page) !== null && _b !== void 0 ? _b : action.payload.data;
            break;
        case PageActionType.SET_ACTIONS:
            state.actions = action.payload;
            break;
        default:
            throw new Error("Unhandled action type: ".concat(action.type));
    }
};

export { PageReducer as default };
//# sourceMappingURL=index.js.map
