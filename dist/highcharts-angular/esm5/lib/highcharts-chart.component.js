import { Component, ElementRef, EventEmitter, Input, Output, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as i0 from "@angular/core";
var HighchartsChartComponent = /** @class */ (function () {
    function HighchartsChartComponent(el, _zone // #75
    ) {
        this.el = el;
        this._zone = _zone;
        this.updateChange = new EventEmitter(true);
        this.chartInstance = new EventEmitter(); // #26
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
    HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    HighchartsChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return HighchartsChartComponent;
}());
export { HighchartsChartComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HighchartsChartComponent, [{
        type: Component,
        args: [{
                selector: 'highcharts-chart',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, { Highcharts: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDOztBQUV6QztJQTRCRSxrQ0FDVSxFQUFjLEVBQ2QsS0FBYSxDQUFDLE1BQU07O1FBRHBCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBUmIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDLENBQUMsTUFBTTtJQVFuRSxDQUFDO0lBcEJKLHNCQUFhLDZDQUFPO2FBQXBCLFVBQXFCLEdBQXVCO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWEsNENBQU07YUFBbkIsVUFBb0IsR0FBWTtZQUM5QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7YUFDOUQ7UUFDSCxDQUFDOzs7T0FBQTtJQWFELDZEQUEwQixHQUExQjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsc0RBQW1CLEdBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUksSUFBSSxDQUFDLFVBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDcEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7WUFFRiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRyxNQUFNO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO29HQTNEVSx3QkFBd0I7aUVBQXhCLHdCQUF3QjttQ0FQckM7Q0FtRUMsQUFoRUQsSUFnRUM7U0E1RFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUlMLEtBQUs7O2tCQU9MLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hpZ2hjaGFydHMtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgSGlnaGNoYXJ0czogdHlwZW9mIEhpZ2hjaGFydHM7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBIaWdoY2hhcnRzLkNoYXJ0Q2FsbGJhY2tGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuICBASW5wdXQoKSBydW5PdXRzaWRlQW5ndWxhcjogYm9vbGVhbjsgLy8gIzc1XG5cbiAgQElucHV0KCkgc2V0IG9wdGlvbnModmFsOiBIaWdoY2hhcnRzLk9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnNWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLndyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHVwZGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLndyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNoYW5nZS5lbWl0KGZhbHNlKTsgLy8gY2xlYXIgdGhlIGZsYWcgYWZ0ZXIgdXBkYXRlXG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIHVwZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBjaGFydEluc3RhbmNlID0gbmV3IEV2ZW50RW1pdHRlcjxIaWdoY2hhcnRzLkNoYXJ0PigpOyAvLyAjMjZcblxuICBwcml2YXRlIGNoYXJ0OiBIaWdoY2hhcnRzLkNoYXJ0O1xuICBwcml2YXRlIG9wdGlvbnNWYWx1ZTogSGlnaGNoYXJ0cy5PcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lIC8vICM3NVxuICApIHt9XG5cbiAgd3JhcHBlZFVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7IC8vICM3NVxuICAgIGlmICh0aGlzLnJ1bk91dHNpZGVBbmd1bGFyKSB7XG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnNWYWx1ZSwgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSAodGhpcy5IaWdoY2hhcnRzIGFzIGFueSlbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zVmFsdWUsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuXG4gICAgICAvLyBlbWl0IGNoYXJ0IGluc3RhbmNlIG9uIGluaXRcbiAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZS5lbWl0KHRoaXMuY2hhcnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyAvLyAjNDRcbiAgICBpZiAodGhpcy5jaGFydCkgeyAgLy8gIzU2XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19