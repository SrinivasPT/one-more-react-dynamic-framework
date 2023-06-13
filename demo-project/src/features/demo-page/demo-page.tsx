import React from "react";
import { useImmerReducer } from "use-immer";

import { SectionBuilder } from "navrang/builder";
import { PageContext, PageInitialState, PageReducer } from "navrang/context";
import { useFetchData } from "navrang/hooks";

const DemoPage = () => {
    const [state, dispatch] = useImmerReducer(PageReducer, PageInitialState);

    useFetchData({ configUrl: "http://localhost:4001/DEMO_PAGE_CONFIG", dataUrl: "http://localhost:4001/DEMO_DATA", dispatch });

    if (state.uiState.isLoading) return <div>Loading...</div>;

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            {state.uiState.isLoading ? null : <SectionBuilder control={state.formConfig} />}
        </PageContext.Provider>
    );
};

export default DemoPage;
