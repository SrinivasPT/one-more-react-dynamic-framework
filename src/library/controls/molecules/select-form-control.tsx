import React from "react";
import { ControlProps } from "../../types";
import Label from "../atoms/label";
import Select from "../atoms/select";

const SelectFormControl = (props: ControlProps) => {
    const { className } = props.control;
    return (
        <div className={className}>
            <Label {...props} />
            <Select {...props} />
        </div>
    );
};

export default SelectFormControl;
