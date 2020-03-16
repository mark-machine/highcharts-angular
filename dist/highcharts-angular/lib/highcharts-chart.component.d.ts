import { ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as i0 from "@angular/core";
export declare class HighchartsChartComponent implements OnDestroy {
    private el;
    private _zone;
    Highcharts: typeof Highcharts;
    constructorType: string;
    callbackFunction: Highcharts.ChartCallbackFunction;
    oneToOne: boolean;
    runOutsideAngular: boolean;
    set options(val: Highcharts.Options);
    set update(val: boolean);
    updateChange: EventEmitter<boolean>;
    chartInstance: EventEmitter<Highcharts.Chart>;
    private chart;
    private optionsValue;
    constructor(el: ElementRef, _zone: NgZone);
    wrappedUpdateOrCreateChart(): void;
    updateOrCreateChart(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<HighchartsChartComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HighchartsChartComponent, "highcharts-chart", never, { "Highcharts": "Highcharts"; "constructorType": "constructorType"; "callbackFunction": "callbackFunction"; "oneToOne": "oneToOne"; "runOutsideAngular": "runOutsideAngular"; "options": "options"; "update": "update"; }, { "updateChange": "updateChange"; "chartInstance": "chartInstance"; }, never>;
}
