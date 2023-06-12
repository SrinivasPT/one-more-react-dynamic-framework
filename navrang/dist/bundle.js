'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var PageContext = React.createContext({});

var Button = function () {
    return React__default["default"].createElement("div", null, "ButtonFormControl");
};

var Check = function () {
    return React__default["default"].createElement("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" });
};

var Input = function () {
    return React__default["default"].createElement("input", { type: "email", className: "form-control", id: "exampleFormControlInput1", placeholder: "name@example.com" });
};

var Radio = function () {
    return React__default["default"].createElement("input", { className: "form-check-input", type: "radio", name: "flexRadioDefault", id: "flexRadioDefault1" });
};

var Select = function () {
    return (React__default["default"].createElement("select", { className: "form-select", "aria-label": "Default select example" },
        React__default["default"].createElement("option", { selected: true }, "Open this select menu"),
        React__default["default"].createElement("option", { value: "1" }, "One"),
        React__default["default"].createElement("option", { value: "2" }, "Two"),
        React__default["default"].createElement("option", { value: "3" }, "Three")));
};

var CheckboxFormControl = function () {
    return React__default["default"].createElement("div", null, "CheckboxFormControl");
};

var DateFormControl = function () {
    return React__default["default"].createElement("div", null, "DateFormControl");
};

var NumberFormControl = function () {
    return React__default["default"].createElement("div", null, "NumberFormControl");
};

var RadioFormControl = function () {
    return React__default["default"].createElement("div", null, "RadioFormControl");
};

var SelectFormControl = function () {
    return (React__default["default"].createElement("div", { className: "mb-3" },
        React__default["default"].createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Email address"),
        React__default["default"].createElement(Select, null)));
};

var TextFormControl = function () {
    return (React__default["default"].createElement("div", { className: "mb-3" },
        React__default["default"].createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Email address"),
        React__default["default"].createElement(Input, null)));
};

exports.Button = Button;
exports.Check = Check;
exports.CheckboxFormControl = CheckboxFormControl;
exports.DateFormControl = DateFormControl;
exports.Input = Input;
exports.NumberFormControl = NumberFormControl;
exports.PageContext = PageContext;
exports.Radio = Radio;
exports.RadioFormControl = RadioFormControl;
exports.Select = Select;
exports.SelectFormControl = SelectFormControl;
exports.TextFormControl = TextFormControl;
