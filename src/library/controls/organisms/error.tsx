import React, { useContext } from "react";
import { PageContext } from "../../context";

const Error = (props: any) => {
    const { state } = useContext(PageContext);
    return (
        <>
            {state?.uiState.showErrors &&
                props.errorMessages.map((message: string) => (
                    <div key={message} className="text-danger mb-3 ms-3">
                        {message}
                    </div>
                ))}
        </>
    );
};

export default Error;
