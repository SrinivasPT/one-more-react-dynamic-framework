export interface InputProps {
    id: string;
    label: string;
    type: "INPUT" | "SELECT" | "RADIO";
    dataType: "STRING" | "NUMBER" | "DATE" | "BOOLEAN" | "OBJECT" | "ARRAY";
    dataKey?: string;
    subType?: string;
    className?: string;

    // Dropdown
    domain?: string;
    parentIdForDomain: string;

    // Input Type
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;

    // Common
    hideExpression?: string;
    readOnlyExpression?: string;
    validationExpression?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export interface ControlProps {
    control: InputProps;
    dataKey?: string;
    // context: PageContextProps;
}
