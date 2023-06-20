import React from "react";
import { useControl } from "../../hooks";
import { ControlProps } from "../../types";

const CodeLabel = (props: ControlProps) => {
    const { getDynamicProps, onChange } = useControl();
    const { state, control, dataKey, data, isHidden, isReadOnly, isValid, errorMessages } = getDynamicProps(props);

    const codeValue = state.domain[control.domain].find((x: any) => x.code === data)?.text;

    return <div>{codeValue}</div>;
};

export default CodeLabel;
