import * as yup from "yup";
import { InputProps } from "../types";

const useValidation = () => {
    const validate = (control: InputProps, value: any) => {
        let schemaType = getSchemaType(control.dataType);

        // Dynamically build the validation schema based on control configuration
        if (control.min !== undefined && (control.dataType === "STRING" || control.dataType === "NUMBER")) {
            schemaType = schemaType.min(control.min, `Should be at least ${control.min} characters or value`);
        }

        if (control.max !== undefined && (control.dataType === "STRING" || control.dataType === "NUMBER")) {
            schemaType = schemaType.max(control.max, `Should be at most ${control.max} characters or value`);
        }

        if (control.required) schemaType = schemaType.required(`Required`);

        const schema = yup.object().shape({ value: schemaType });

        let isValid = true;
        let errorMessages: string[] = [];

        try {
            schema.validateSync({ value }, { abortEarly: false });
        } catch (err: any) {
            isValid = false;
            errorMessages = err.errors;
        }

        if (isValid && control.validationExpression) {
            // eslint-disable-next-line no-new-func
            const customValidation = new Function("value", control.validationExpression);
            isValid = customValidation(value);
            if (!isValid) errorMessages.push(`Custom validation failed for ${control.id}`);
        }

        return { isValid, errorMessages };
    };

    const getSchemaType = (dataType: string) => {
        switch (dataType) {
            case "STRING":
                return yup.string();
            case "NUMBER":
                return yup.number().typeError("Value must be a Number");
            case "DATE":
                return yup.date().typeError("Value must be a Date");
            default:
                return yup.string();
        }
    };

    return { validate };
};

export default useValidation;
