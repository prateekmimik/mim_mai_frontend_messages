import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'PlotComponent',
  imports: [],
  templateUrl: './plot.component.html',
  styleUrl: './plot.component.css'
})
export class PlotComponent implements AfterViewInit {
  @ViewChild('plotlyChart') plotlyChart!: ElementRef;

  ngAfterViewInit() {
    const element = this.plotlyChart.nativeElement;

    const data: Plotly.Data[] = [
      { x: [1, 2, 3, 4], y: [10, 15, 13, 17], type: 'scatter', mode: 'lines', marker: { color: 'red' } },
      { x: [1, 2, 3, 4], y: [16, 5, 11, 9], type: 'scatter', mode: 'lines', marker: { color: 'blue' } }
    ] 

    const layout: Partial<Plotly.Layout> = {
      title: 'My Plotly Chart',
      xaxis: {
        title: 'X Axis Title',
        showgrid: true,
        zeroline: true
      },
      yaxis: {
        title: 'Y Axis Title',
        showline: true
      }
    };

    Plotly.newPlot(element, data, layout);
  }
};