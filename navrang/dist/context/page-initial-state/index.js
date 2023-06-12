var PageInitialState = {
    formConfig: {},
    data: {
        original: {},
        current: {},
        searchResults: [],
        selectedDetail: {},
    },
    uiState: {
        isLoading: false,
        isSearching: false,
        isDetailLoading: false,
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

export { PageInitialState as default };
//# sourceMappingURL=index.js.map
