// export const PageState = {
//     config: {
//         form: {},
//     },
//     data: {
//         original: {},
//         current: {},
//         searchResults: [],
//         selectedDetail: {},
//     },
//     uiState: {
//         isLoading: false,
//         isSearching: false,
//         isDetailLoading: false,
//     },
//     filter: {
//         currentQuery: {},
//     },
//     pagination: {
//         currentPage: 1,
//         itemsPerPage: 10,
//         totalItems: 0,
//     },
//     error: {
//         messages: [],
//         searchError: null,
//         detailError: null,
//     },
// };

interface FormConfig {
    // Define the properties of the form config here
}

interface Data {
    original: any;
    current: any;
    searchResults: any[];
    selectedDetail: any;
}

interface UIState {
    isLoading: boolean;
    isSearching: boolean;
    isDetailLoading: boolean;
}

interface Filter {
    currentQuery: any; // Define the query object structure here
}

interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
}

interface ErrorState {
    messages: string[];
    searchError: string | null;
    detailError: string | null;
}

export interface PageState {
    formConfig: any;
    data: Data;
    actions: any;
    uiState: UIState;
    filter: Filter;
    pagination: Pagination;
    error: ErrorState;
}

export const PageActionType = {
    SET_INITIAL_STATE: "SET_INITIAL_STATE",
    SET_STATE_FOR_KEY: "SET_STATE_FOR_KEY",
    REFRESH_DATA: "REFRESH_DATA",
    SET_ACTIONS: "SET_ACTIONS",
};

export interface PageAction {
    type: string;
    payload?: any;
}
