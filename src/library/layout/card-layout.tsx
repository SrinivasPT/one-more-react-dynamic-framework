import React from "react";

const CardLayout = (props: any) => {
    const { control } = props;
    return (
        <div className="card mb-3 mt-3">
            <div className="card-header text-uppercase fw-bold">{control.title}</div>
            <div className="card-body">{props.children}</div>
        </div>
    );
};

export default CardLayout;
