import React from "react";
import { useControl } from "../../hooks";
import { ControlProps } from "../../types";
import Error from "../organisms/error";

const Input = (props: ControlProps) => {
    const { getDynamicProps, onChange } = useControl();
    const { state, control, dataKey, data, isHidden, isReadOnly, isValid, errorMessages } = getDynamicProps(props);

    if (isHidden) return null;

    return (
        <>
            <input
                id={control.id}
                type={control.type}
                className={`form-control ${isValid || !state.uiState.showErrors ? "" : "error"}`}
                placeholder={control.placeholder}
                value={data}
                required={control.required}
                minLength={control.minLength}
                maxLength={control.maxLength}
                min={control.min}
                max={control.max}
                disabled={isReadOnly ?? control.readOnly ?? false}
                readOnly={isReadOnly ?? control.readOnly ?? false}
                onChange={(event) => onChange(event, dataKey)}
            />
            <Error errorMessages={errorMessages} />
        </>
    );
};

export default Input;
