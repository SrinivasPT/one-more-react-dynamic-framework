import React from 'react';
import Input from '../../atoms/input/index.js';

var TextFormControl = function () {
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Email address"),
        React.createElement(Input, null)));
};

export { TextFormControl as default };
//# sourceMappingURL=index.js.map
