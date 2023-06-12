import React from "react";
import { InputProps } from "../../types";

const Input = (props: any) => {
    const control: InputProps = props.control;
    const data = "";

    return (
        <input
            id={control.id}
            type={control.type}
            disabled={control.readOnly ?? false}
            className={control.className}
            placeholder={control.placeholder}
            value={data || control.defaultValue || ""}
            required={control.required}
            minLength={control.minLength}
            maxLength={control.maxLength}
            min={control.min}
            max={control.max}
        />
    );
};

export default Input;
