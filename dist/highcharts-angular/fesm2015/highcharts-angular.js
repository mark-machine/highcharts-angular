import { EventEmitter, ɵɵdirectiveInject, ElementRef, NgZone, ɵɵdefineComponent, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import 'highcharts';

class HighchartsChartComponent {
    constructor(el, _zone // #75
    ) {
        this.el = el;
        this._zone = _zone;
        this.updateChange = new EventEmitter(true);
        this.chartInstance = new EventEmitter(); // #26
    }
    set options(val) {
        this.optionsValue = val;
        this.wrappedUpdateOrCreateChart();
    }
    set update(val) {
        if (val) {
            this.wrappedUpdateOrCreateChart();
            this.updateChange.emit(false); // clear the flag after update
        }
    }
    wrappedUpdateOrCreateChart() {
        if (this.runOutsideAngular) {
            this._zone.runOutsideAngular(() => {
                this.updateOrCreateChart();
            });
        }
        else {
            this.updateOrCreateChart();
        }
    }
    updateOrCreateChart() {
        if (this.chart && this.chart.update) {
            this.chart.update(this.optionsValue, true, this.oneToOne || false);
        }
        else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.optionsValue, this.callbackFunction || null);
            // emit chart instance on init
            this.chartInstance.emit(this.chart);
        }
    }
    ngOnDestroy() {
        if (this.chart) { // #56
            this.chart.destroy();
            this.chart = null;
        }
    }
}
HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
HighchartsChartComponent.ɵcmp = ɵɵdefineComponent({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighchartsChartComponent, [{
        type: Component,
        args: [{
                selector: 'highcharts-chart',
                template: ''
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }]; }, { Highcharts: [{
            type: Input
        }], constructorType: [{
            type: Input
        }], callbackFunction: [{
            type: Input
        }], oneToOne: [{
            type: Input
        }], runOutsideAngular: [{
            type: Input
        }], options: [{
            type: Input
        }], update: [{
            type: Input
        }], updateChange: [{
            type: Output
        }], chartInstance: [{
            type: Output
        }] }); })();

class HighchartsChartModule {
}
HighchartsChartModule.ɵmod = ɵɵdefineNgModule({ type: HighchartsChartModule });
HighchartsChartModule.ɵinj = ɵɵdefineInjector({ factory: function HighchartsChartModule_Factory(t) { return new (t || HighchartsChartModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(HighchartsChartModule, { declarations: [HighchartsChartComponent], exports: [HighchartsChartComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighchartsChartModule, [{
        type: NgModule,
        args: [{
                declarations: [HighchartsChartComponent],
                exports: [HighchartsChartComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of highcharts-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HighchartsChartComponent, HighchartsChartModule };
//# sourceMappingURL=highcharts-angular.js.map
