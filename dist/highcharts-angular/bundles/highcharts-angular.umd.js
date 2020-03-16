(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('highcharts')) :
    typeof define === 'function' && define.amd ? define('highcharts-angular', ['exports', '@angular/core', 'highcharts'], factory) :
    (global = global || self, factory(global['highcharts-angular'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var HighchartsChartComponent = /** @class */ (function () {
        function HighchartsChartComponent(el, _zone // #75
        ) {
            this.el = el;
            this._zone = _zone;
            this.updateChange = new core.EventEmitter(true);
            this.chartInstance = new core.EventEmitter(); // #26
        }
        Object.defineProperty(HighchartsChartComponent.prototype, "options", {
            set: function (val) {
                this.optionsValue = val;
                this.wrappedUpdateOrCreateChart();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HighchartsChartComponent.prototype, "update", {
            set: function (val) {
                if (val) {
                    this.wrappedUpdateOrCreateChart();
                    this.updateChange.emit(false); // clear the flag after update
                }
            },
            enumerable: true,
            configurable: true
        });
        HighchartsChartComponent.prototype.wrappedUpdateOrCreateChart = function () {
            var _this = this;
            if (this.runOutsideAngular) {
                this._zone.runOutsideAngular(function () {
                    _this.updateOrCreateChart();
                });
            }
            else {
                this.updateOrCreateChart();
            }
        };
        HighchartsChartComponent.prototype.updateOrCreateChart = function () {
            if (this.chart && this.chart.update) {
                this.chart.update(this.optionsValue, true, this.oneToOne || false);
            }
            else {
                this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.optionsValue, this.callbackFunction || null);
                // emit chart instance on init
                this.chartInstance.emit(this.chart);
            }
        };
        HighchartsChartComponent.prototype.ngOnDestroy = function () {
            if (this.chart) { // #56
                this.chart.destroy();
                this.chart = null;
            }
        };
        HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.NgZone)); };
        HighchartsChartComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return HighchartsChartComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HighchartsChartComponent, [{
            type: core.Component,
            args: [{
                    selector: 'highcharts-chart',
                    template: ''
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.NgZone }]; }, { Highcharts: [{
                type: core.Input
            }], constructorType: [{
                type: core.Input
            }], callbackFunction: [{
                type: core.Input
            }], oneToOne: [{
                type: core.Input
            }], runOutsideAngular: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], update: [{
                type: core.Input
            }], updateChange: [{
                type: core.Output
            }], chartInstance: [{
                type: core.Output
            }] }); })();

    var HighchartsChartModule = /** @class */ (function () {
        function HighchartsChartModule() {
        }
        HighchartsChartModule.ɵmod = core["ɵɵdefineNgModule"]({ type: HighchartsChartModule });
        HighchartsChartModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function HighchartsChartModule_Factory(t) { return new (t || HighchartsChartModule)(); } });
        return HighchartsChartModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](HighchartsChartModule, { declarations: [HighchartsChartComponent], exports: [HighchartsChartComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HighchartsChartModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [HighchartsChartComponent],
                    exports: [HighchartsChartComponent]
                }]
        }], null, null); })();

    exports.HighchartsChartComponent = HighchartsChartComponent;
    exports.HighchartsChartModule = HighchartsChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=highcharts-angular.umd.js.map
