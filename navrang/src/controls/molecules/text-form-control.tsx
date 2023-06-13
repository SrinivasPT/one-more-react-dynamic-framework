import React from "react";
import { ControlProps } from "../../types";
import { Input } from "../atoms";

const TextFormControl = (props: ControlProps) => {
    const { id, className, label } = props.control;
    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <Input {...props} />
        </div>
    );
};

export default TextFormControl;
