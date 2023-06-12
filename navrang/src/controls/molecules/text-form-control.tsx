import React from "react";
import { Input } from "../atoms";

const TextFormControl = () => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <Input />
        </div>
    );
};

export default TextFormControl;
