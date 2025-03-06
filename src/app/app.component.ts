import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DatasetComponent } from './components/dataset/dataset.component';
import { PlotComponent } from './components/plot/plot.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatasetComponent,PlotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_response_pipeline';
}
