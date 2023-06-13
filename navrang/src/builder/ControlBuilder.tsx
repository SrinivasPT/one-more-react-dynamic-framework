import React from "react";

import { ControlBuilderProps } from "../types";
import { Input, Select, Radio } from "../controls";

const CONTROL_COMPONENTS: any = {
    INPUT: Input,
    SELECT: Select,
    RADIO: Radio,
};

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control, dataKey, mode }) => {
    const ControlComponent = CONTROL_COMPONENTS[control.type];

    return ControlComponent ? <ControlComponent control={control} dataKey={dataKey} mode={mode} /> : <div>SmartControl</div>;
};

export default ControlBuilder;
