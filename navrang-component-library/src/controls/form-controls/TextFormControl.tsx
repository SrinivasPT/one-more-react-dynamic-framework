import React from "react";
import { InputControl } from "../basic-controls";

export const TextFormControl = () => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <InputControl />
        </div>
    );
};
