import { Dispatch } from "react";

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
    showErrors: boolean;
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

export const PageAction = {
    SET_INITIAL_STATE: "SET_INITIAL_STATE",
    SET_STATE_FOR_KEY: "SET_STATE_FOR_KEY",
    REFRESH_DATA: "REFRESH_DATA",
    SET_ACTIONS: "SET_ACTIONS",
    SUBMIT: "SUBMIT",
} as const;

export type PageActionType = keyof typeof PageAction;

export interface PageAction {
    type: string;
    payload?: any;
}

export interface PageContextProps {
    state: PageState;
    dispatch: Dispatch<PageAction>; // assuming PageAction is your action type for useImmerReducer
}
