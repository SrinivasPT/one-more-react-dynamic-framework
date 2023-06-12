import React from 'react';

var Select = function (props) {
    return (React.createElement("select", { className: "form-select", "aria-label": "Default select example" },
        React.createElement("option", { selected: true }, "Open this select menu"),
        React.createElement("option", { value: "1" }, "One"),
        React.createElement("option", { value: "2" }, "Two"),
        React.createElement("option", { value: "3" }, "Three")));
};

export { Select as default };
//# sourceMappingURL=index.js.map
