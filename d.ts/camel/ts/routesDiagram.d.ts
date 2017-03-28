/// <reference path="../../includes.d.ts" />
/// <reference path="camelPlugin.d.ts" />
declare module Camel {
    function createGraphStates(nodes: any, links: any, transitions: any): any;
    function dagreLayoutGraph(nodes: any, links: any, svgElement: any, allowDrag?: boolean, onClick?: any): {
        nodes: any;
        graph: any;
    };
    function dagreUpdateGraphData(): void;
}