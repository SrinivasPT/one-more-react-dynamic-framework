import React from "react";
import { CardLayout } from "../layout";
import { LayoutBuilderProps } from "../types/builder-types";

const LAYOUTS: any = {
    CARD: CardLayout,
};

const LayoutBuilder: React.FC<LayoutBuilderProps> = ({ control, children }) => {
    const LayoutComponent = LAYOUTS[control.type];

    return <LayoutComponent>{children}</LayoutComponent>;
};

export default LayoutBuilder;
