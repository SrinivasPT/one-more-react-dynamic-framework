import { PageContextProps } from "./context-types";

export interface ControlBuilderProps {
    control: any;
    dataKey: string;
    mode?: string;
    context: PageContextProps;
}

export interface LayoutBuilderProps {
    control: any;
    children: React.ReactNode;
}

export interface SectionBuilderProps {
    control: any;
    dataKey?: string;
    context: PageContextProps;
}
