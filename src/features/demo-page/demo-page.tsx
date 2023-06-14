import React from "react";
import { useImmerReducer } from "use-immer";

import { SectionBuilder } from "../../library/builder";
import { PageContext, PageInitialState, PageReducer } from "../../library/context";
import { useFetchData } from "../../library/hooks";

const DemoPage = () => {
    const [state, dispatch] = useImmerReducer(PageReducer, PageInitialState);

    useFetchData({ configUrl: "http://localhost:4001/DEMO_PAGE_CONFIG", dataUrl: "http://localhost:4001/DEMO_DATA", dispatch });

    if (state.uiState.isLoading) return <div>Loading...</div>;

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            {!state.uiState.isLoading && (
                <div className="m-3">
                    <SectionBuilder control={state.formConfig} />
                </div>
            )}
        </PageContext.Provider>
    );
};

export default DemoPage;
