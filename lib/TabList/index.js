"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
var react_1 = __importDefault(require("react"));
//  inline styles defined using a Block Element Modifier format
var styles = "\n    .TabControl_Nav {\n        margin-top: 15px;\n        display: flex;\n        flex-direction: column-reverse;\n    }\n    .TabControl_small .TabControl_Nav {\n        margin-top: 7px;\n    }\n    .TabControl_NavTabs {\n        display: flex;\n        flex-direction: row;\n    }\n    .TabControl_NavBottomBar {\n        border-radius: 2px;\n        height: 2px;\n        background: #EAEAEA;\n    }\n    .TabControl_quiet .TabControl_NavBottomBar {\n        visibility: hidden;\n    }\n    .TabControl_Tab {\n        display: flex;\n        flex-direction: column;\n        white-space: nowrap;\n        cursor: pointer;\n        color: #707070;\n    }\n    .TabControl_TabBottomBar {\n        position: relative;\n        top: 2px;\n        border-radius: 2px;\n        margin-top: 15px;\n        height: 2px;\n        background: #3F3F3F;\n        visibility: hidden;\n    }\n    .TabControl_small .TabControl_TabBottomBar {\n        margin-top: 7px;\n    }\n    .TabControl_Tab_active > .TabControl_TabBottomBar {\n        visibility: visible;\n    }\n    .TabControl_Tab:not(:first-child) {\n        margin-left: 12px;\n    }\n    .TabControl_Tab:not(:last-child) {\n        margin-right: 12px;\n    }\n    .TabControl_Tab_active {\n        color: #3F3F3F;\n    }\n    .TabControl_Tab_disabled {\n        color: #B3B3B3;\n    }\n";
var TabList = /** @class */ (function (_super) {
    __extends(TabList, _super);
    function TabList(props) {
        var _this = _super.call(this, props) || this;
        if (props.tabs == null) {
            throw new Error("nav property is required");
        }
        _this.state = { activeTab: props.defaultTab || Object.keys(props.tabs)[0] };
        return _this;
    }
    Object.defineProperty(TabList.prototype, "activeTab", {
        get: function () {
            return this.props.tabs[this.state.activeTab];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabList.prototype, "activeView", {
        get: function () {
            return this.activeTab.view;
        },
        enumerable: true,
        configurable: true
    });
    TabList.prototype.render = function () {
        var _this = this;
        var tabNames = Object.keys(this.props.tabs);
        return (react_1.default.createElement("div", { className: [
                "TabControl",
                this.props.quiet ? "TabControl_quiet" : "",
                this.props.small ? "TabControl_small" : ""
            ].join(" ") },
            react_1.default.createElement("style", null, styles),
            react_1.default.createElement("nav", { className: "TabControl_Nav margin" },
                react_1.default.createElement("div", { className: "TabControl_NavBottomBar" }),
                react_1.default.createElement("div", { className: "TabControl_NavTabs" }, tabNames.map(function (name, index) {
                    var tab = _this.props.tabs[name];
                    var label = tab.label || name;
                    var active = name === _this.state.activeTab;
                    var className = [
                        "TabControl_Tab",
                        active ? "TabControl_Tab_active" : "",
                        tab.disabled ? "TabControl_Tab_disabled" : "",
                    ].join(" ");
                    return react_1.default.createElement("div", { key: name, className: className, onClick: function (e) {
                            if (tab.disabled !== true) {
                                _this.setState({ activeTab: name });
                            }
                        } },
                        react_1.default.createElement("div", null, label),
                        react_1.default.createElement("div", { className: "TabControl_TabBottomBar" }));
                }))),
            this.activeView && react_1.default.createElement(this.activeView, null)));
    };
    return TabList;
}(react_1.default.Component));
exports.default = TabList;
