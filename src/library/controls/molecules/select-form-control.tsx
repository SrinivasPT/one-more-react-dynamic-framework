import React from "react";
import { ControlProps } from "../../types";
import Label from "../atoms/label";
import Select from "../atoms/select";
import { getControlWidthClassName } from "../control-functions";

const SelectFormControl = (props: ControlProps) => {
    return (
        <div className={getControlWidthClassName(props.control)}>
            <Label {...props} />
            <Select {...props} />
        </div>
    );
};

export default SelectFormControl;
