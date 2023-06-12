import React from "react";
import { Select } from "../atoms";

const SelectFormControl = () => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <Select />
        </div>
    );
};

export default SelectFormControl;
