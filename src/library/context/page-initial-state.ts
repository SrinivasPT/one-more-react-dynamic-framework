import { PageState } from "../types";

const PageInitialState: PageState = {
    formConfig: {},
    data: {
        original: {},
        current: {},
        searchResults: [],
        selectedDetail: {},
    },
    uiState: {
        isLoading: true,
        showErrors: false,
    },
    filter: {
        currentQuery: {},
    },
    pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 0,
    },
    error: {
        messages: [],
        searchError: null,
        detailError: null,
    },
    actions: {},
};

export default PageInitialState;
