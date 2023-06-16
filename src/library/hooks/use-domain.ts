import _ from "lodash";
import { useContext } from "react";
import { PageContext } from "../context";
import { Domain, DomainData, InputProps } from "../types";
import useControl from "./use-control";

const useDomain = () => {
    const { state } = useContext(PageContext);
    const { getControlValue } = useControl();

    const getDomain = (domainName: string) => state.domain[domainName] ?? [];

    const getDomainForParent = (domainName: string, parentValue: any) =>
        state.domain[domainName].filter((item: Domain) => item.parentId == parentValue) ?? [];

    const getOptionsByParent = (control: InputProps, dataKey: string) => {
        if (_.isNil(control.parentIdForDomain)) return getDomain(control.domain as string) || [];
        const parts = dataKey?.split(".") ?? [];
        parts[parts.length - 1] = control.parentIdForDomain;
        const parentDataKey = parts.join(".");
        const parentValue = getControlValue(parentDataKey);
        return getDomainForParent(control.domain as string, parentValue as string) || getDomain(control.domain as string) || [];
    };

    const convertToMap = (domain: DomainData) => {
        return Object.fromEntries(Object.entries(domain).map(([key, value]) => [key, value]));
    };

    return { getDomain, getDomainForParent, getOptionsByParent, convertToMap };
};

export default useDomain;
