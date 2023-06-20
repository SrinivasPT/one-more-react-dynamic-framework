import React from "react";

import { CodeLabel, FreeFormGrid, Input, Label, Radio, Select, SelectFormControl, TableControl, TextFormControl } from "../controls";
import { ControlBuilderProps } from "../types";

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control, dataKey, mode }) => {
    const CONTROL_COMPONENTS: any = {
        INPUT: Input,
        LABEL: Label,
        SELECT: Select,
        CODE_LABEL: CodeLabel,
        RADIO: Radio,
        FC_TEXT: TextFormControl,
        FC_SELECT: SelectFormControl,
        FREE_FORM_GRID: FreeFormGrid,
        TABLE: TableControl,
    };

    const ControlComponent = CONTROL_COMPONENTS[control.type];

    return <ControlComponent control={control} dataKey={dataKey} mode={mode} />;
};

export default ControlBuilder;
