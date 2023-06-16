import React from "react";
import { useImmerReducer } from "use-immer";
import { SectionBuilder } from "../../library/builder";
import { PageContext, PageInitialState, PageReducer } from "../../library/context";
import { useFetchData } from "../../library/hooks";

const DemoPage = () => {
    const [state, dispatch] = useImmerReducer(PageReducer, PageInitialState);

    useFetchData({ pageName: "DEMO", dispatch });

    if (state.uiState.isLoading) return <div>Loading...</div>;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch({ type: "SUBMIT" });
    };

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            {!state.uiState.isLoading && (
                <>
                    <div className="m-3">
                        <SectionBuilder control={state.formConfig} />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </>
            )}
        </PageContext.Provider>
    );
};

export default DemoPage;
