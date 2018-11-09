import React from "react";
export declare type TabListProperties = {
    quiet?: boolean;
    small?: boolean;
    defaultTab?: string;
    tabs: {
        [name: string]: {
            label?: string;
            disabled?: boolean;
            view?: React.ComponentType;
        };
    };
};
export default class TabList extends React.Component {
    props: TabListProperties;
    state: {
        activeTab: string;
    };
    constructor(props: TabListProperties);
    readonly activeTab: {
        label?: string | undefined;
        disabled?: boolean | undefined;
        view?: React.ComponentClass<{}, any> | React.StatelessComponent<{}> | undefined;
    };
    readonly activeView: React.ComponentClass<{}, any> | React.StatelessComponent<{}> | undefined;
    render(): JSX.Element;
}
