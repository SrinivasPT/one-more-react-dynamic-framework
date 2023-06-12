import { PageContext, PageInitialState, PageReducer } from "navrang/context";
import { TextFormControl } from "navrang/controls";
import React from "react";
import { useImmerReducer } from "use-immer";

const DemoPage = () => {
    const [state, dispatch] = useImmerReducer(PageReducer, PageInitialState);

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            <TextFormControl />
        </PageContext.Provider>
    );
};

export default DemoPage;
