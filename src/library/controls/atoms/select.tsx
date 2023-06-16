import React from "react";
import { useControl, useDomain } from "../../hooks";
import { ControlProps, Domain } from "../../types";
import Error from "../organisms/error";

const Select = (props: ControlProps) => {
    const { getDynamicProps, onChange } = useControl();
    const { getOptionsByParent } = useDomain();
    const { state, dataKey, control, data, isHidden, isReadOnly, isValid, errorMessages } = getDynamicProps(props);

    if (isHidden) return null;

    const options = getOptionsByParent(control, dataKey);

    return (
        <>
            <select
                className={`form-select ${isValid || !state.uiState.showErrors ? "" : "error"}`}
                aria-label={control.label}
                disabled={isReadOnly ?? false}
                onChange={(event) => onChange(event, dataKey)}
            >
                <option value="">--Select--</option>
                {options.map((item: Domain) => (
                    <option key={item.code} value={item.code} defaultValue={data}>
                        {item.text}
                    </option>
                ))}
            </select>
            <Error errorMessages={errorMessages} />
        </>
    );
};

export default Select;
