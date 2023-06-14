import React from "react";
import { SectionBuilderProps } from "../types";
import ControlBuilder from "./control-builder";
import LayoutBuilder from "./layout-builder";

const SectionBuilder: React.FC<SectionBuilderProps> = ({ control, dataKey = control.dataKey }) => {
    const controls = control.controls;

    // Note: Here we are giving precedence to the dataKey passed to the SectionBuilder over the dataKey of the control.
    const ctrlDataKey = dataKey ?? control.dataKey;

    return (
        <LayoutBuilder control={control}>
            <div className="row g-4">
                {controls.map((ctrl: any, index: number) => (
                    <ControlBuilder key={`${dataKey}-${ctrl.id}`} control={ctrl} dataKey={`${ctrlDataKey}.${ctrl.id}`} />
                ))}
            </div>
        </LayoutBuilder>
    );
};

export default SectionBuilder;
