import React from 'react';
import Select from '../../atoms/select/index.js';

var SelectFormControl = function () {
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Email address"),
        React.createElement(Select, null)));
};

export { SelectFormControl as default };
//# sourceMappingURL=index.js.map
