import React from "react";
import { ControlProps } from "../../types";

const Label = (props: ControlProps) => {
    const { id, label } = props.control;
    return (
        <label htmlFor={id} className="form-label">
            {label}
        </label>
    );
};

export default Label;
