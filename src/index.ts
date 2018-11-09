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

//  this is a temporary shim for the latest versions of react.
if (window.setTimeout == null) { window.setTimeout = function(){ return -1; } }
if (window.clearTimeout == null) { window.clearTimeout = function(){}; }
if (window.cancelAnimationFrame == null) { window.cancelAnimationFrame = function() {}; }
if (window.requestAnimationFrame == null) { window.requestAnimationFrame = function() { return -1; } }

export { default as TabList } from "./TabList/index"
