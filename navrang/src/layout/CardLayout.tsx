import React from "react";

const CardLayout = (props: any) => {
    const { control } = props;
    return (
        <div className="card">
            <div className="card-header text-uppercase fw-bold">{control.label}</div>
            <div className="card-body">{props.children}</div>
        </div>
    );
};

export default CardLayout;
