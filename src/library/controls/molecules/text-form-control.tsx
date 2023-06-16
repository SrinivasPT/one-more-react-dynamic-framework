import React from "react";
import { ControlProps } from "../../types";
import Input from "../atoms/input";
import Label from "../atoms/label";

const TextFormControl = (props: ControlProps) => {
    const { className } = props.control;
    return (
        <div className={className}>
            <Label {...props} />
            <Input {...props} />
        </div>
    );
};

export default TextFormControl;
