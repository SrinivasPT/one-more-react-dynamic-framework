import React from "react";
import ControlBuilder from "./ControlBuilder";
import LayoutBuilder from "./LayoutBuilder";

const SectionBuilder = (props: any) => {
    const { control } = props;
    const controls = control.controls;

    const dataKey = props.dataKey ?? control.dataKey;
    const childDataKey = `${dataKey}.${control.id}`;

    const getControls = () => {
        return (
            <div className="row">
                {controls.map((control: any) => {
                    return <ControlBuilder key={childDataKey} control={control} dataKey={childDataKey} />;
                })}
            </div>
        );
    };

    return <LayoutBuilder control={control} children={getControls()} />;
};

export default SectionBuilder;
