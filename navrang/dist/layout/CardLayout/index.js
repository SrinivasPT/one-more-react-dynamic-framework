import React from 'react';

var CardLayout = function (props) {
    var control = props.control;
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-header text-uppercase fw-bold" }, control.label),
        React.createElement("div", { className: "card-body" }, props.children)));
};

export { CardLayout as default };
//# sourceMappingURL=index.js.map
