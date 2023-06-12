import React from "react";
import { CardLayout } from "../layout";

const LAYOUTS: any = {
    CARD: CardLayout,
    //... add other control types here
};

const LayoutBuilder = (props: any) => {
    const { control } = props;
    const LayoutComponent = LAYOUTS[control.type];

    return <LayoutComponent children={props.children} />;
};

export default LayoutBuilder;
