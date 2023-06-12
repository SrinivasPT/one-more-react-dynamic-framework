import { Dispatch, createContext } from "react";
import { PageAction, PageState } from "../types";

interface PageContextProps {
    state: PageState;
    dispatch: Dispatch<PageAction>; // assuming PageAction is your action type for useImmerReducer
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export default PageContext;
