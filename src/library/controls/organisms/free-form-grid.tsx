import _ from "lodash";
import React, { useContext, useEffect } from "react";
import { SectionBuilder } from "../../builder";
import { PageContext } from "../../context";
import { useDispatchAction } from "../../hooks";
import { ControlProps, PageAction } from "../../types";
import { getControlWidthClassName } from "../control-functions";

const FreeFormGrid: React.FC<ControlProps> = ({ control, dataKey: propsDataKey }) => {
    const { state, dispatch } = useContext(PageContext);
    const dispatchAction = useDispatchAction();

    const dataKey: string = (control.dataKey ?? propsDataKey) as string;
    const data = _.get(state.data.current, dataKey as string, []);

    const handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatchAction(PageAction.SET_STATE_FOR_KEY, { dataKey, value: [...data, {}] });
    };

    const handleDelete = (event: any, index: number) => {
        event.preventDefault();
        dispatchAction(PageAction.SET_STATE_FOR_KEY, { dataKey, value: [...data.slice(0, index), ...data.slice(index + 1)] });
    };

    useEffect(() => {
        if (!data.length) {
            dispatch({ type: PageAction.SET_STATE_FOR_KEY, payload: { dataKey, value: [{}] } });
        }
    }, [data.length, dispatch, dataKey]);

    return (
        <div className="row">
            {data.map((item: any, index: number) => (
                <div key={`${dataKey}-${index}`} className={`row ${getControlWidthClassName(control)} mb-3`}>
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <SectionBuilder control={control} dataKey={`${dataKey}.[${index}]`} />
                        </div>
                        <div className="m-2">
                            <i className="bi bi-trash fs-3 text-danger" role="button" onClick={(event) => handleDelete(event, index)}></i>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-md-12 d-flex justify-content-end">
                <div className="input-group mt-3">
                    <button className="btn btn-light fs-5 text-danger" onClick={handleAdd}>
                        <i className="bi bi-plus-circle me-2"></i> <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FreeFormGrid;
