import React from "react";
import { SectionBuilderProps } from "../types";
import ControlBuilder from "./ControlBuilder";

const SectionBuilder: React.FC<SectionBuilderProps> = ({ control, dataKey = control.dataKey, context }) => {
    const controls = control.controls;

    return (
        // <LayoutBuilder control={control}>
        <div className="row">
            {controls.map((ctrl: any, index: number) => (
                <ControlBuilder key={`${dataKey}-${ctrl.id}`} control={ctrl} dataKey={`${dataKey}.${ctrl.id}`} context={context} />
            ))}
        </div>
        // </LayoutBuilder>
    );
};

export default SectionBuilder;
