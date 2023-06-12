import React from "react";
import { SectionBuilderProps } from "../types";
import ControlBuilder from "./ControlBuilder";
import LayoutBuilder from "./LayoutBuilder";

const SectionBuilder: React.FC<SectionBuilderProps> = ({ control, dataKey = control.dataKey }) => {
    const controls = control.controls;
    const childDataKey = `${dataKey}.${control.id}`;

    return (
        <LayoutBuilder control={control}>
            <div className="row">
                {controls.map((control: any, index: number) => (
                    <ControlBuilder key={`${childDataKey}-${index}`} control={control} dataKey={childDataKey} />
                ))}
            </div>
        </LayoutBuilder>
    );
};

export default SectionBuilder;
