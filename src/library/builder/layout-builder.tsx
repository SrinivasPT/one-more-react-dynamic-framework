import React from "react";
import { CardLayout } from "../layout";
import { LayoutBuilderProps } from "../types";

const LAYOUTS: any = {
    CARD: CardLayout,
};

const LayoutBuilder: React.FC<LayoutBuilderProps> = ({ control, children }) => {
    const LayoutComponent = LAYOUTS[control.type ?? "CARD"];
    return <LayoutComponent control={control} children={children} />;
};

export default LayoutBuilder;
