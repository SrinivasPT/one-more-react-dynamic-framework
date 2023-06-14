import React from "react";
import { SectionBuilderProps } from "../types";
import ControlBuilder from "./control-builder";
import LayoutBuilder from "./layout-builder";

const SectionBuilder: React.FC<SectionBuilderProps> = ({ control, dataKey = control.dataKey }) => {
    const controls = control.controls;

    return (
        <LayoutBuilder control={control}>
            <div className="row g-4">
                {controls.map((ctrl: any, index: number) => (
                    <ControlBuilder key={`${dataKey}-${ctrl.id}`} control={ctrl} dataKey={`${dataKey}.${ctrl.id}`} />
                ))}
            </div>
        </LayoutBuilder>
    );
};

export default SectionBuilder;
