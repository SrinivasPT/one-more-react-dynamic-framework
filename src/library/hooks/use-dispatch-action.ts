import { useContext } from "react";
import { PageContext } from "../context";
import { PageActionType } from "../types";

type PayloadType = {
    dataKey: string;
    value: any;
};

export const useDispatchAction = () => {
    const { dispatch } = useContext(PageContext);

    return (type: PageActionType, payload: PayloadType) => {
        dispatch({ type, payload });
    };
};
