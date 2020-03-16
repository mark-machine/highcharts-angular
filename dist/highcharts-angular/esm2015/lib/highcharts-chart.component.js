import { Component, ElementRef, EventEmitter, Input, Output, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as i0 from "@angular/core";
export class HighchartsChartComponent {
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
HighchartsChartComponent.ɵfac = function HighchartsChartComponent_Factory(t) { return new (t || HighchartsChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
HighchartsChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HighchartsChartComponent, selectors: [["highcharts-chart"]], inputs: { Highcharts: "Highcharts", constructorType: "constructorType", callbackFunction: "callbackFunction", oneToOne: "oneToOne", runOutsideAngular: "runOutsideAngular", options: "options", update: "update" }, outputs: { updateChange: "updateChange", chartInstance: "chartInstance" }, decls: 0, vars: 0, template: function HighchartsChartComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDOztBQU16QyxNQUFNLE9BQU8sd0JBQXdCO0lBd0JuQyxZQUNVLEVBQWMsRUFDZCxLQUFhLENBQUMsTUFBTTs7UUFEcEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFSYixpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUMsQ0FBQyxNQUFNO0lBUW5FLENBQUM7SUFwQkosSUFBYSxPQUFPLENBQUMsR0FBdUI7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELElBQWEsTUFBTSxDQUFDLEdBQVk7UUFDOUIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDhCQUE4QjtTQUM5RDtJQUNILENBQUM7SUFhRCwwQkFBMEI7UUFDeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBSSxJQUFJLENBQUMsVUFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxDQUNwRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQztZQUVGLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFHLE1BQU07WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7O2dHQTNEVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxLQUFLOztrQkFPTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoaWdoY2hhcnRzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEhpZ2hjaGFydHM6IHR5cGVvZiBIaWdoY2hhcnRzO1xuICBASW5wdXQoKSBjb25zdHJ1Y3RvclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tGdW5jdGlvbjogSGlnaGNoYXJ0cy5DaGFydENhbGxiYWNrRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZVRvT25lOiBib29sZWFuOyAvLyAjMjBcbiAgQElucHV0KCkgcnVuT3V0c2lkZUFuZ3VsYXI6IGJvb2xlYW47IC8vICM3NVxuXG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbDogSGlnaGNoYXJ0cy5PcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zVmFsdWUgPSB2YWw7XG4gICAgdGhpcy53cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICB9XG4gIEBJbnB1dCgpIHNldCB1cGRhdGUodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy53cmFwcGVkVXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy51cGRhdGVDaGFuZ2UuZW1pdChmYWxzZSk7IC8vIGNsZWFyIHRoZSBmbGFnIGFmdGVyIHVwZGF0ZVxuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuICBAT3V0cHV0KCkgY2hhcnRJbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXI8SGlnaGNoYXJ0cy5DaGFydD4oKTsgLy8gIzI2XG5cbiAgcHJpdmF0ZSBjaGFydDogSGlnaGNoYXJ0cy5DaGFydDtcbiAgcHJpdmF0ZSBvcHRpb25zVmFsdWU6IEhpZ2hjaGFydHMuT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSAvLyAjNzVcbiAgKSB7fVxuXG4gIHdyYXBwZWRVcGRhdGVPckNyZWF0ZUNoYXJ0KCkgeyAvLyAjNzVcbiAgICBpZiAodGhpcy5ydW5PdXRzaWRlQW5ndWxhcikge1xuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3JDcmVhdGVDaGFydCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnVwZGF0ZSkge1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUodGhpcy5vcHRpb25zVmFsdWUsIHRydWUsIHRoaXMub25lVG9PbmUgfHwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gKHRoaXMuSGlnaGNoYXJ0cyBhcyBhbnkpW3RoaXMuY29uc3RydWN0b3JUeXBlIHx8ICdjaGFydCddKFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMub3B0aW9uc1ZhbHVlLFxuICAgICAgICB0aGlzLmNhbGxiYWNrRnVuY3Rpb24gfHwgbnVsbFxuICAgICAgKTtcblxuICAgICAgLy8gZW1pdCBjaGFydCBpbnN0YW5jZSBvbiBpbml0XG4gICAgICB0aGlzLmNoYXJ0SW5zdGFuY2UuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgLy8gIzQ0XG4gICAgaWYgKHRoaXMuY2hhcnQpIHsgIC8vICM1NlxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==