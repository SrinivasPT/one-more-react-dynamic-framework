import log from "loglevel";
import { useEffect } from "react";
import { server } from "../services";
import { FormDataFetchArgs, PageAction } from "../types";
import useDomain from "./use-domain";

const useFetchData = (props: FormDataFetchArgs) => {
    const { pageName, dispatch } = props;
    const { convertToMap } = useDomain();

    // TODO: Page Config can be derived from the page name. For the data, we can have config JSON.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formConfigResponse = await server.get(`${process.env.REACT_APP_CONFIG_BASE_URL}/${pageName}_PAGE_CONFIG`);
                const dataResponse = await server.get(`${process.env.REACT_APP_PERSON_BASE_URL}/${pageName}_DATA`);
                const domainResponse = await server.get(`${process.env.REACT_APP_MASTER_DATA_BASE_URL}/DOMAIN_DATA`);

                dispatch({
                    type: PageAction.SET_INITIAL_STATE,
                    payload: {
                        formConfig: formConfigResponse.data,
                        data: dataResponse.data,
                        domain: convertToMap(domainResponse.data),
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
