import React from "react";

import { Input, Radio, Select, TextFormControl } from "../controls";
import { ControlBuilderProps } from "../types";

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control, dataKey, mode }) => {
    const CONTROL_COMPONENTS: any = {
        INPUT: Input,
        SELECT: Select,
        RADIO: Radio,
        FC_TEXT: TextFormControl,
    };

    const ControlComponent = CONTROL_COMPONENTS[control.type];
    return <ControlComponent control={control} dataKey={dataKey} mode={mode} />;
};

export default ControlBuilder;
