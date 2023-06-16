import { PageAction } from "./context-types";

export interface FormDataFetchArgs {
    pageName: string;
    dispatch: React.Dispatch<PageAction>;
}
