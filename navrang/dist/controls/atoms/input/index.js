import React from 'react';

var Input = function (props) {
    var _a;
    var control = props.control;
    return (React.createElement("input", { id: control.id, type: control.type, disabled: (_a = control.readOnly) !== null && _a !== void 0 ? _a : false, className: control.className, placeholder: control.placeholder, value: control.defaultValue || "", required: control.required, minLength: control.minLength, maxLength: control.maxLength, min: control.min, max: control.max }));
};

export { Input as default };
//# sourceMappingURL=index.js.map
