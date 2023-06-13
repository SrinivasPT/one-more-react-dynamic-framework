import _ from "lodash";
import log from "loglevel";
import { useContext } from "react";
import { PageContext } from "../context";
import { PageActionType } from "../types";

const useControl = () => {
    const { state, dispatch } = useContext(PageContext);

    const getDynamicProps = (props: any) => {
        const dataKey = props.control.dataKey ?? props.dataKey;
        const data = _.get(state, dataKey) ?? "";
        const isHidden = evaluateExpression(props.control?.hideExpression);
        const isReadOnly = evaluateExpression(props.control?.readOnlyExpression);
        return { dataKey, data, isHidden, isReadOnly, control: props.control };
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, dataKey: string) => {
        dispatch({ type: PageActionType.SET_STATE_FOR_KEY, payload: { dataKey, value: event.target.value } });
    };

    const evaluateExpression = (expression: string | undefined): any => {
        if (!expression) return null;

        try {
            const model = state.data.current; // Assuming 'data' is always defined
            const func = new Function("model", `return ${expression}`);
            const value = func(model);
            return value;
        } catch (error) {
            log.error(`Error while evaluating expression "${expression}": ${error}`);
            return null;
        }
    };

    return { evaluateExpression, onChange, getDynamicProps };
};

export default useControl;
