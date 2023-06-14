import React from "react";

import { Input, Radio, Select, TextFormControl } from "../controls";
import { ControlBuilderProps, ControlProps } from "../types";

const ControlBuilder: React.FC<ControlBuilderProps> = ({ control, dataKey, mode, context }) => {
    const CONTROL_COMPONENTS: any = {
        INPUT: (props: ControlProps) => <Input {...props} context={context} />,
        SELECT: (props: ControlProps) => <Select {...props} context={context} />,
        RADIO: (props: ControlProps) => <Radio {...props} context={context} />,
        FC_TEXT: (props: ControlProps) => <TextFormControl {...props} context={context} />,
    };

    const ControlComponent = CONTROL_COMPONENTS[control.type];
    return <ControlComponent control={control} dataKey={dataKey} mode={mode} context={context} />;
};

export default ControlBuilder;
