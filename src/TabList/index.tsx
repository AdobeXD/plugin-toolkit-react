/*
Copyright 2018 Adobe Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
import React from "react";
import ReactDOM from "react-dom";

//  inline styles defined using a Block Element Modifier format
const styles = `
    .TabControl_Nav {
        margin-top: 15px;
        display: flex;
        flex-direction: column-reverse;
    }
    .TabControl_small .TabControl_Nav {
        margin-top: 7px;
    }
    .TabControl_NavTabs {
        display: flex;
        flex-direction: row;
    }
    .TabControl_NavBottomBar {
        border-radius: 2px;
        height: 2px;
        background: #EAEAEA;
    }
    .TabControl_quiet .TabControl_NavBottomBar {
        visibility: hidden;
    }
    .TabControl_Tab {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        cursor: pointer;
        color: #707070;
    }
    .TabControl_TabBottomBar {
        position: relative;
        top: 2px;
        border-radius: 2px;
        margin-top: 15px;
        height: 2px;
        background: #3F3F3F;
        visibility: hidden;
    }
    .TabControl_small .TabControl_TabBottomBar {
        margin-top: 7px;
    }
    .TabControl_Tab_active > .TabControl_TabBottomBar {
        visibility: visible;
    }
    .TabControl_Tab:not(:first-child) {
        margin-left: 12px;
    }
    .TabControl_Tab:not(:last-child) {
        margin-right: 12px;
    }
    .TabControl_Tab_active {
        color: #3F3F3F;
    }
    .TabControl_Tab_disabled {
        color: #B3B3B3;
    }
`

export type TabListProperties = {
    quiet?: boolean
    small?: boolean
    defaultTab?: string
    tabs: {
        [name: string]: {
            label?: string
            disabled?: boolean
            view?: React.ComponentType
        }
    }
}

export default class TabList extends React.Component {

    props!: TabListProperties
    state!: {
        activeTab: string
    }

    constructor(props: TabListProperties) {
        super(props);
        if (props.tabs == null) {
            throw new Error("nav property is required");
        }
        this.state = { activeTab: props.defaultTab || Object.keys(props.tabs)[0] };
    }

    get activeTab() {
        return this.props.tabs[this.state.activeTab]
    }

    get activeView() {
        return this.activeTab.view
    }

    render() {
        let tabNames = Object.keys(this.props.tabs)
        return (
            <div className={[
                "TabControl",
                this.props.quiet ? "TabControl_quiet" : "",
                this.props.small ? "TabControl_small" : ""].join(" ")}
            >
                <style>{styles}</style>
                <nav className="TabControl_Nav margin">
                    <div className="TabControl_NavBottomBar" />
                    <div className="TabControl_NavTabs">
                        { tabNames.map((name, index) => {
                            let tab = this.props.tabs[name]
                            let label = tab.label || name
                            let active = name === this.state.activeTab
                            let className = [
                                "TabControl_Tab",
                                active ? "TabControl_Tab_active" : "",
                                tab.disabled ? "TabControl_Tab_disabled" : "",
                            ].join(" ")
                            return <div
                                    key={name}
                                    className={className}
                                    onClick={e => {
                                        if (tab.disabled !== true) {
                                            this.setState({ activeTab: name })
                                        }
                                    }}
                                >
                                <div>{ label }</div>
                                <div className="TabControl_TabBottomBar"></div>
                                </div>
                        }) }
                    </div>
                </nav>
                { this.activeView && <this.activeView /> }
            </div>
        )
    }

}
