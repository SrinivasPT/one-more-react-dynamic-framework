import React from "react";
import { ControlBuilder, LayoutBuilder } from "../builder";
import { useControl } from "../hooks";
import { ControlProps, InputProps } from "../types";

const TableControl = (props: ControlProps) => {
    const { getDynamicProps, onChange } = useControl();
    const { state, control, dataKey, data, isHidden } = getDynamicProps(props);

    if (isHidden) return null;

    return (
        <div>
            <LayoutBuilder control={control}>
                <table className="table table-sm table-hover">
                    <thead className="table-dark">
                        <tr>
                            {control.controls.map((ctrl: InputProps) => (
                                <th key={ctrl.id}>{ctrl.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row: any, rowIndex: number) => (
                            <tr key={row.id ?? rowIndex}>
                                {control.controls.map((ctrl: InputProps, index: number) => (
                                    <td key={index}>
                                        <ControlBuilder
                                            key={`${dataKey}-${ctrl.id}`}
                                            control={{ ...ctrl, width: 12 }}
                                            dataKey={`${dataKey}.[${rowIndex}].${ctrl.id}`}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LayoutBuilder>
        </div>
    );
};

export default TableControl;
