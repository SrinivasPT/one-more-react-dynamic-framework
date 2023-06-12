import React from "react";
import { SelectControl } from "../basic-controls";

export const SelectFormControl = () => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <SelectControl />
        </div>
    );
};
