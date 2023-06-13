export interface InputProps {
    id: string;
    label: string;
    type: string;
    dataKey?: string;
    subType?: string;
    className?: string;
    placeholder?: string;
    defaultValue?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    hideExpression?: string;
    readOnlyExpression?: string;
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
}
