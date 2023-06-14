import { createContext } from "react";
import { PageContextProps } from "../types";
import PageInitialState from "./page-initial-state";

const PageContext = createContext<PageContextProps>({ state: PageInitialState, dispatch: () => {} });

export default PageContext;
