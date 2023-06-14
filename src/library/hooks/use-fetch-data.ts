import log from "loglevel";
import { useEffect } from "react";
import { server } from "../services";
import { FormDataFetchArgs, PageActionType } from "../types";

const useFetchData = (props: FormDataFetchArgs) => {
    const { configUrl, dataUrl, dispatch } = props;

    useEffect(() => {
        const fetchData = async () => {
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
};

export default useFetchData;
