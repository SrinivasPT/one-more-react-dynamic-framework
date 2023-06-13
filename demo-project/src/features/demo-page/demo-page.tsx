import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";

import log from "loglevel";
import { SectionBuilder } from "navrang/builder";
import { PageContext, PageInitialState, PageReducer } from "navrang/context";
import { server } from "navrang/services";
import { PageActionType } from "navrang/types";

const DemoPage = () => {
    const [state, dispatch] = useImmerReducer(PageReducer, PageInitialState);

    // useFetchData({ configUrl: "http://localhost:4001/DEMO_PAGE_CONFIG", dataUrl: "http://localhost:4001/DEMO_DATA", dispatch });

    useEffect(() => {
        const fetchData = async () => {
            const { configUrl, dataUrl } = {
                configUrl: "http://localhost:4001/DEMO_PAGE_CONFIG",
                dataUrl: "http://localhost:4001/DEMO_DATA",
            };

            try {
                const formConfigResponse = await server.get(configUrl);
                const dataResponse = await server.get(dataUrl);

                dispatch({
                    type: PageActionType.SET_INITIAL_STATE,
                    payload: {
                        formConfig: formConfigResponse.data,
                        data: dataResponse.data,
                    },
                });
            } catch (error) {
                log.error(error);
            }
        };

        fetchData();
    }, []);

    if (state.uiState.isLoading) return <div>Loading...</div>;

    return (
        <PageContext.Provider value={{ state, dispatch }}>
            <SectionBuilder control={state.formConfig} />
        </PageContext.Provider>
    );
};

export default DemoPage;
