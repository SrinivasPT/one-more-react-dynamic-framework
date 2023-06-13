import React from "react";
import { SectionBuilderProps } from "../types";
import ControlBuilder from "./ControlBuilder";
import LayoutBuilder from "./LayoutBuilder";

const SectionBuilder: React.FC<SectionBuilderProps> = ({ control, dataKey = control.dataKey }) => {
    const controls = control.controls;

    return (
        <LayoutBuilder control={control}>
            <div className="row">
                {controls.map((control: any, index: number) => (
                    <ControlBuilder key={`${dataKey}-${index}`} control={control} dataKey={`${dataKey}.${control.id}`} />
                ))}
            </div>
        </LayoutBuilder>
    );
};

export default SectionBuilder;
