import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule } from 'devextreme-angular';


@Component({
    styleUrls: ['./olap.component.css'],
    selector: 'app-olap',
    templateUrl: './olap.component.html'
})
export class OlapComponent {
    dataSource: any;

    constructor() {
        this.dataSource = {
            fields: [],
            store: {
                type: 'xmla',
                url: 'https://olaper.conduit3.com/olaper/xmla',
                catalog: 'Adventure Works DW Standard Edition',
                cube: 'Adventure Works'
            }
        };
    }
}
