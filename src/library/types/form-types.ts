import { PageAction } from "./context-types";

export interface FormDataFetchArgs {
    configUrl: string;
    dataUrl: string;
    dispatch: React.Dispatch<PageAction>;
}
