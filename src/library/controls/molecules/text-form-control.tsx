import React from "react";
import { ControlProps } from "../../types";
import Input from "../atoms/input";
import Label from "../atoms/label";
import { getControlWidthClassName } from "../control-functions";

const TextFormControl = (props: ControlProps) => {
    return (
        <div className={getControlWidthClassName(props.control)}>
            <Label {...props} />
            <Input {...props} />
        </div>
    );
};

export default TextFormControl;
