declare var require: any;

import { Component } from '@angular/core';

import proj4 from 'proj4';
declare global {
    interface Window { proj4: any; }
}
window.proj4 = proj4;

import * as Highcharts from 'highcharts';

import StockModule from 'highcharts/modules/stock';
import MapModule from 'highcharts/modules/map';
import ExportingModule from 'highcharts/modules/exporting';

import SunsetTheme from 'highcharts/themes/sunset';

const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');

import * as HC_customEvents from 'highcharts-custom-events';
HC_customEvents(Highcharts);

// Alternative way of a plugin loading:
//const HC_ce = require('highcharts-custom-events');
//HC_ce(Highcharts);

StockModule(Highcharts);
MapModule(Highcharts);
ExportingModule(Highcharts);

// Legacy way of map loading - see file at the path for more info.
//require('../../js/worldmap')(Highcharts);

SunsetTheme(Highcharts);


Highcharts.setOptions({
  title: {
    style: {
      color: 'tomato'
    }
  },
  legend: {
    enabled: false
  }
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // For all demos:
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  // Demo #1
  optFromInputString: string = `
  {
    "title": { "text": "Highcharts chart" },
    "series": [{
      "data": [11,2,3],
      "zones": [{
        "value": 7.2,
        "dashStyle": "dot",
        "color": "red"
      }]
    }, {
      "data": [5,6,7]
    }]
  }
  `;

  optFromInput: Highcharts.Options = JSON.parse(this.optFromInputString);
  updateFromInput: boolean = false;

  // Demonstrate chart instance
  logChartInstance(chart: Highcharts.Chart) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    this.optFromInput = JSON.parse(this.optFromInputString);
  }

  seriesTypes: {[key: string]: string} = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line'
  };

  toggleSeriesType(index: number = 0) {
    this.optFromInput.series[index].type =
      this.seriesTypes[this.optFromInput.series[index].type || 'line'] as
        "column" | "scatter" | "spline" | "line";
    // nested change - must trigger update
    this.updateFromInput = true;
  }

  //----------------------------------------------------------------------
  // Demo #2

  // starting values
  updateDemo2: boolean = false;
  usedIndex: number = 0;
  chartTitle: string = 'My chart'; // for init - change through titleChange

  // change in all places
  titleChange(event: any) {
    var v = event;
    this.chartTitle = v;

    this.charts.forEach((el) => {
      el.hcOptions.title.text = v;
    });

    // trigger ngOnChanges
    this.updateDemo2 = true;
  };

  charts = [{
  	hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '1st data set' },
      plotOptions: {
        series: {
           pointStart: Date.now(),
           pointInterval: 86400000 // 1 day
        }
      },
      series: [{
        type: 'line',
        data: [11, 2, 3],
        threshold: 5,
        negativeColor: 'red',
        events: {
          dblclick: function () {
            console.log('dblclick - thanks to the Custom Events plugin');
          }
        }
      }, {
        type: 'candlestick',

        data: [
          [0, 15, -6, 7],
          [7, 12, -1, 3],
          [3, 10, -3, 3]
        ]
      }]
    } as Highcharts.Options,
  	hcCallback: (chart: Highcharts.Chart) => {
      console.log('some variables: ', Highcharts, chart, this.charts);
    }
  }, {
  	hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '2nd data set' },
      series: [{
        type: 'column',
        data: [4, 3, -12],
        threshold: -10
      }, {
        type: 'ohlc',
        data: [
          [0, 15, -6, 7],
          [7, 12, -1, 3],
          [3, 10, -3, 3]
        ]
      }]
    } as Highcharts.Options,
    hcCallback: () => {}
  }, {
  	hcOptions: {
      title: { text: this.chartTitle },
      subtitle: { text: '3rd data set' },
      series: [{
        type: 'scatter',
        data: [1, 2, 3, 4, 5]
      }, {
        type: 'areaspline',
        data: [
          5,
          11,
          3,
          6,
          0
        ]
      }]
    } as Highcharts.Options,
    hcCallback: () => {}
  }];

  //----------------------------------------------------------------------
  // Demo #3

  chartMap: Highcharts.Options = {
    chart: {
      map: mapWorld
    },
    title: {
      text: 'Highmaps basic demo'
    },
    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: [
        ['fo', 0],
        ['um', 1],
        ['us', 2],
        ['jp', 3],
        ['sc', 4],
        ['in', 5],
        ['fr', 6],
        ['fm', 7],
        ['cn', 8],
        ['pt', 9],
        ['sw', 10],
        ['sh', 11],
        ['br', 12],
        ['ki', 13],
        ['ph', 14],
        ['mx', 15],
        ['es', 16],
        ['bu', 17],
        ['mv', 18],
        ['sp', 19],
        ['gb', 20],
        ['gr', 21],
        ['as', 22],
        ['dk', 23],
        ['gl', 24],
        ['gu', 25],
        ['mp', 26],
        ['pr', 27],
        ['vi', 28],
        ['ca', 29],
        ['st', 30],
        ['cv', 31],
        ['dm', 32],
        ['nl', 33],
        ['jm', 34],
        ['ws', 35],
        ['om', 36],
        ['vc', 37],
        ['tr', 38],
        ['bd', 39],
        ['lc', 40],
        ['nr', 41],
        ['no', 42],
        ['kn', 43],
        ['bh', 44],
        ['to', 45],
        ['fi', 46],
        ['id', 47],
        ['mu', 48],
        ['se', 49],
        ['tt', 50],
        ['my', 51],
        ['pa', 52],
        ['pw', 53],
        ['tv', 54],
        ['mh', 55],
        ['cl', 56],
        ['th', 57],
        ['gd', 58],
        ['ee', 59],
        ['ag', 60],
        ['tw', 61],
        ['bb', 62],
        ['it', 63],
        ['mt', 64],
        ['vu', 65],
        ['sg', 66],
        ['cy', 67],
        ['lk', 68],
        ['km', 69],
        ['fj', 70],
        ['ru', 71],
        ['va', 72],
        ['sm', 73],
        ['kz', 74],
        ['az', 75],
        ['tj', 76],
        ['ls', 77],
        ['uz', 78],
        ['ma', 79],
        ['co', 80],
        ['tl', 81],
        ['tz', 82],
        ['ar', 83],
        ['sa', 84],
        ['pk', 85],
        ['ye', 86],
        ['ae', 87],
        ['ke', 88],
        ['pe', 89],
        ['do', 90],
        ['ht', 91],
        ['pg', 92],
        ['ao', 93],
        ['kh', 94],
        ['vn', 95],
        ['mz', 96],
        ['cr', 97],
        ['bj', 98],
        ['ng', 99],
        ['ir', 100],
        ['sv', 101],
        ['sl', 102],
        ['gw', 103],
        ['hr', 104],
        ['bz', 105],
        ['za', 106],
        ['cf', 107],
        ['sd', 108],
        ['cd', 109],
        ['kw', 110],
        ['de', 111],
        ['be', 112],
        ['ie', 113],
        ['kp', 114],
        ['kr', 115],
        ['gy', 116],
        ['hn', 117],
        ['mm', 118],
        ['ga', 119],
        ['gq', 120],
        ['ni', 121],
        ['lv', 122],
        ['ug', 123],
        ['mw', 124],
        ['am', 125],
        ['sx', 126],
        ['tm', 127],
        ['zm', 128],
        ['nc', 129],
        ['mr', 130],
        ['dz', 131],
        ['lt', 132],
        ['et', 133],
        ['er', 134],
        ['gh', 135],
        ['si', 136],
        ['gt', 137],
        ['ba', 138],
        ['jo', 139],
        ['sy', 140],
        ['mc', 141],
        ['al', 142],
        ['uy', 143],
        ['cnm', 144],
        ['mn', 145],
        ['rw', 146],
        ['so', 147],
        ['bo', 148],
        ['cm', 149],
        ['cg', 150],
        ['eh', 151],
        ['rs', 152],
        ['me', 153],
        ['tg', 154],
        ['la', 155],
        ['af', 156],
        ['ua', 157],
        ['sk', 158],
        ['jk', 159],
        ['bg', 160],
        ['qa', 161],
        ['li', 162],
        ['at', 163],
        ['sz', 164],
        ['hu', 165],
        ['ro', 166],
        ['ne', 167],
        ['lu', 168],
        ['ad', 169],
        ['ci', 170],
        ['lr', 171],
        ['bn', 172],
        ['iq', 173],
        ['ge', 174],
        ['gm', 175],
        ['ch', 176],
        ['td', 177],
        ['kv', 178],
        ['lb', 179],
        ['dj', 180],
        ['bi', 181],
        ['sr', 182],
        ['il', 183],
        ['ml', 184],
        ['sn', 185],
        ['gn', 186],
        ['zw', 187],
        ['pl', 188],
        ['mk', 189],
        ['py', 190],
        ['by', 191],
        ['cz', 192],
        ['bf', 193],
        ['na', 194],
        ['ly', 195],
        ['tn', 196],
        ['bt', 197],
        ['md', 198],
        ['ss', 199],
        ['bw', 200],
        ['bs', 201],
        ['nz', 202],
        ['cu', 203],
        ['ec', 204],
        ['au', 205],
        ['ve', 206],
        ['sb', 207],
        ['mg', 208],
        ['is', 209],
        ['eg', 210],
        ['kg', 211],
        ['np', 212]
      ]
    } as Highcharts.SeriesMapOptions, {
      type: 'mapbubble',
      dataLabels: {
        enabled: true,
        format: '{point.capital}'
      },
      name: 'Cities',
      data: [{"abbrev":"AL","parentState":"Alabama","capital":"Montgomery","lat":32.38012,"lon":-86.300629,"population":205764,"z":205764},{"abbrev":"AK","parentState":"Alaska","capital":"Juneau","lat":58.29974,"lon":-134.406794,"population":31275,"z":31275},{"abbrev":"AZ","parentState":"Arizona","capital":"Phoenix","lat":33.44826,"lon":-112.075774,"population":1445632,"z":1445632},{"abbrev":"AR","parentState":"Arkansas","capital":"Little Rock","lat":34.748655,"lon":-92.274494,"population":193524,"z":193524},{"abbrev":"CA","parentState":"California","capital":"Sacramento","lat":38.579065,"lon":-121.491014,"population":466488,"z":466488},{"abbrev":"CO","parentState":"Colorado","capital":"Denver","lat":39.74001,"lon":-104.992259,"population":600158,"z":600158},{"abbrev":"CT","parentState":"Connecticut","capital":"Hartford","lat":41.763325,"lon":-72.674069,"population":124775,"z":124775},{"abbrev":"DE","parentState":"Delaware","capital":"Dover","lat":39.158035,"lon":-75.524734,"population":36047,"z":36047},{"abbrev":"FL","parentState":"Florida","capital":"Tallahassee","lat":30.439775,"lon":-84.280649,"population":181376,"z":181376},{"abbrev":"GA","parentState":"Georgia","capital":"Atlanta","lat":33.748315,"lon":-84.391109,"population":420003,"z":420003},{"abbrev":"HI","parentState":"Hawaii","capital":"Honolulu","lat":21.30477,"lon":-157.857614,"population":337256,"z":337256},{"abbrev":"ID","parentState":"Idaho","capital":"Boise","lat":43.60698,"lon":-116.193409,"population":205671,"z":205671},{"abbrev":"IL","parentState":"Illinois","capital":"Springfield","lat":39.801055,"lon":-89.643604,"population":116250,"z":116250},{"abbrev":"IN","parentState":"Indiana","capital":"Indianapolis","lat":39.76691,"lon":-86.149964,"population":820445,"z":820445},{"abbrev":"IA","parentState":"Iowa","capital":"Des Moines","lat":41.58979,"lon":-93.615659,"population":203433,"z":203433},{"abbrev":"KS","parentState":"Kansas","capital":"Topeka","lat":39.049285,"lon":-95.671184,"population":127473,"z":127473},{"abbrev":"KY","parentState":"Kentucky","capital":"Frankfort","lat":38.19507,"lon":-84.878694,"population":25527,"z":25527},{"abbrev":"LA","parentState":"Louisiana","capital":"Baton Rouge","lat":30.443345,"lon":-91.186994,"population":229493,"z":229493},{"abbrev":"ME","parentState":"Maine","capital":"Augusta","lat":44.318036,"lon":-69.776218,"population":19136,"z":19136},{"abbrev":"MD","parentState":"Maryland","capital":"Annapolis","lat":38.9767,"lon":-76.489934,"population":38394,"z":38394},{"abbrev":"MA","parentState":"Massachusetts","capital":"Boston","lat":42.358635,"lon":-71.056699,"population":617594,"z":617594},{"abbrev":"MI","parentState":"Michigan","capital":"Lansing","lat":42.73194,"lon":-84.552249,"population":114297,"z":114297},{"abbrev":"MN","parentState":"Minnesota","capital":"Saint Paul","lat":44.943829,"lon":-93.093326,"population":285068,"z":285068},{"abbrev":"MS","parentState":"Mississippi","capital":"Jackson","lat":32.29869,"lon":-90.180489,"population":173514,"z":173514},{"abbrev":"MO","parentState":"Missouri","capital":"Jefferson City","lat":38.577515,"lon":-92.177839,"population":43079,"z":43079},{"abbrev":"MT","parentState":"Montana","capital":"Helana","lat":46.58976,"lon":-112.021202,"population":28190,"z":28190},{"abbrev":"NE","parentState":"Nebraska","capital":"Lincoln","lat":40.81362,"lon":-96.707739,"population":258379,"z":258379},{"abbrev":"NV","parentState":"Nevada","capital":"Carson City","lat":39.164885,"lon":-119.766999,"population":55274,"z":55274},{"abbrev":"NH","parentState":"New Hampshire","capital":"Concord","lat":43.20725,"lon":-71.536604,"population":42695,"z":42695},{"abbrev":"NJ","parentState":"New Jersey","capital":"Trenton","lat":40.217875,"lon":-74.759404,"population":84913,"z":84913},{"abbrev":"NM","parentState":"New Mexico","capital":"Santa Fe","lat":35.691543,"lon":-105.937406,"population":67947,"z":67947},{"abbrev":"NY","parentState":"New York","capital":"Albany","lat":42.651445,"lon":-73.755254,"population":97856,"z":97856},{"abbrev":"NC","parentState":"North Carolina","capital":"Raleigh","lat":35.78551,"lon":-78.642669,"population":403892,"z":403892},{"abbrev":"ND","parentState":"North Dakota","capital":"Bismarck","lat":46.805372,"lon":-100.779334,"population":61272,"z":61272},{"abbrev":"OH","parentState":"Ohio","capital":"Columbus","lat":39.96196,"lon":-83.002984,"population":787033,"z":787033},{"abbrev":"OK","parentState":"Oklahoma","capital":"Oklahoma City","lat":35.472015,"lon":-97.520354,"population":579999,"z":579999},{"abbrev":"OR","parentState":"Oregon","capital":"Salem","lat":44.93326,"lon":-123.043814,"population":154637,"z":154637},{"abbrev":"PA","parentState":"Pennsylvania","capital":"Harrisburg","lat":40.259865,"lon":-76.88223,"population":49528,"z":49528},{"abbrev":"RI","parentState":"Rhode Island","capital":"Providence","lat":41.823875,"lon":-71.411994,"population":178042,"z":178042},{"abbrev":"SC","parentState":"South Carolina","capital":"Columbia","lat":33.99855,"lon":-81.045249,"population":129272,"z":129272},{"abbrev":"SD","parentState":"South Dakota","capital":"Pierre","lat":44.368924,"lon":-100.350158,"population":13646,"z":13646},{"abbrev":"TN","parentState":"Tennessee","capital":"Nashville","lat":36.167783,"lon":-86.778365,"population":601222,"z":601222},{"abbrev":"TX","parentState":"Texas","capital":"Austin","lat":30.267605,"lon":-97.742984,"population":790390,"z":790390},{"abbrev":"UT","parentState":"Utah","capital":"Salt Lake City","lat":40.759505,"lon":-111.888229,"population":186440,"z":186440},{"abbrev":"VT","parentState":"Vermont","capital":"Montpelier","lat":44.260299,"lon":-72.576264,"population":7855,"z":7855},{"abbrev":"VA","parentState":"Virginia","capital":"Richmond","lat":37.5407,"lon":-77.433654,"population":204214,"z":204214},{"abbrev":"WA","parentState":"Washington","capital":"Olympia","lat":47.039231,"lon":-122.891366,"population":46478,"z":46478},{"abbrev":"WV","parentState":"West Virginia","capital":"Charleston","lat":38.350195,"lon":-81.638989,"population":51400,"z":51400},{"abbrev":"WI","parentState":"Wisconsin","capital":"Madison","lat":43.07295,"lon":-89.386694,"population":233209,"z":233209},{"abbrev":"WY","parentState":"Wyoming","capital":"Cheyenne","lat":41.134815,"lon":-104.821544,"population":59466,"z":59466}] as any,
      maxSize: '12%',
      color: 'green'
    }]
  }
}
