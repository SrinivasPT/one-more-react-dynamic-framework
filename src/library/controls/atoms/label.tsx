import React from "react";
import { useControl } from "../../hooks";
import { ControlProps } from "../../types";

const Label = (props: ControlProps) => {
    const { getDynamicProps, onChange } = useControl();
    const { data } = getDynamicProps(props);

    return <label className="form-label">{data}</label>;
};

export default Label;
