export interface ControlBuilderProps {
    control: any;
    dataKey: string;
    mode?: string;
}

export interface LayoutBuilderProps {
    control: any;
    children: React.ReactNode;
}

export interface SectionBuilderProps {
    control: any;
    dataKey?: string;
}
