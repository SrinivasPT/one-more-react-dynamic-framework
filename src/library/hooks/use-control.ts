import _ from "lodash";
import log from "loglevel";
import { ChangeEvent, useContext } from "react";
import { PageContext } from "../context";
import { PageAction } from "../types";
import useValidation from "./use-validation";

const useControl = () => {
    const { state, dispatch } = useContext(PageContext);
    const { validate } = useValidation();

    const getDynamicProps = (props: any) => {
        // Get the dynamic props
        const dataKey = props.control.dataKey ?? props.dataKey;
        const data = _.get(state.data.current, dataKey) ?? "";
        const isHidden = evaluateExpression(props.control?.hideExpression);
        const isReadOnly = evaluateExpression(props.control?.readOnlyExpression);

        // Validate the field
        const { isValid, errorMessages } = validate(props.control, data);

        return { dataKey, data, isHidden, isReadOnly, control: props.control, isValid, errorMessages, state };
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, dataKey: string) => {
        dispatch({ type: PageAction.SET_STATE_FOR_KEY, payload: { dataKey, value: event.target.value } });
    };

    const getControlValue = (dataKey: string) => {
        if (_.isNil(dataKey)) return "";
        return _.get(state.data.current, dataKey);
    };

    const getParentKey = (dataKey: string | undefined) => {
        if (_.isNil(dataKey)) return "";
        const parts = dataKey.split(".");
        parts.pop();
        return parts.join(".");
    };

    const evaluateExpression = (expression: string | undefined): any => {
        if (!expression) return null;

        try {
            const model = state.data.current; // Assuming 'data' is always defined
            // eslint-disable-next-line no-new-func
            const func = new Function("model", `return ${expression}`);
            const value = func(model);
            return value;
        } catch (error) {
            log.error(`Error while evaluating expression "${expression}": ${error}`);
            return null;
        }
    };

    return { evaluateExpression, onChange, getDynamicProps, getControlValue, getParentKey };
};

export default useControl;
