import React from "react";
import { Input, Radio, Select } from "../controls";

// Map control types to their respective components
const CONTROL_COMPONENTS: any = {
    INPUT: Input,
    SELECT: Select,
    RADIO: Radio,
    //... add other control types here
};

const ControlBuilder = (props: any) => {
    const { control, dataKey, mode } = props;

    // Get the component based on control type
    const ControlComponent = CONTROL_COMPONENTS[control.type];

    // Render component if it exists, otherwise render a default message
    return ControlComponent ? <ControlComponent key={dataKey} control={control} dataKey={dataKey} mode={mode} /> : <div>SmartControl</div>;
};

export default ControlBuilder;
