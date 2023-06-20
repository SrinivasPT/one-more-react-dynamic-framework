import _ from "lodash";
import log from "loglevel";
import { PageAction, PageContextProps } from "../types";

export const getDynamicProps = (props: any) => {
    const { control, context } = props;
    const dataKey = control.dataKey ?? props.dataKey;
    const data = _.get(context.state.data.current, dataKey) ?? "";
    const isHidden = evaluateExpression(control?.hideExpression, context);
    const isReadOnly = evaluateExpression(control?.readOnlyExpression, context);
    return { dataKey, data, isHidden, isReadOnly, control: control };
};

export const onChange = (event: React.ChangeEvent<HTMLInputElement>, dataKey: string, context: PageContextProps) => {
    context.dispatch({ type: PageAction.SET_STATE_FOR_KEY, payload: { dataKey, value: event.target.value } });
};

export const evaluateExpression = (expression: string | undefined, context: PageContextProps): any => {
    if (!expression) return null;

    try {
        const model = context.state.data.current; // Assuming 'data' is always defined
        const func = new Function("model", `return ${expression}`);
        const value = func(model);
        return value;
    } catch (error) {
        log.error(`Error while evaluating expression "${expression}": ${error}`);
        return null;
    }
};

export const getControlWidthClassName = (control: any) => {
    return `col-lg-${control.width} col-md-${control.width}`;
};
