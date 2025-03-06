import { Component } from '@angular/core';
import { DatasetService } from '../../services/dataset.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetResponse } from '../../services/dataset.service';

@Component({
  selector: 'DatasetComponent',
  imports: [CommonModule],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.css'
})
export class DatasetComponent implements OnInit {

  messages: string[] = []
  categoryValues: number[][] = []
  categories: string[] = []

  constructor(private service: DatasetService) {}

  ngOnInit(): void {
    this.service.getDataset('direct').subscribe({
      next: (result: any) => {
        try {
          const { X, Y, categoryNames } = (result as DatasetResponse)
          this.messages = X
          this.categoryValues = Y
          this.categories = categoryNames
        } catch (_) {
          this.messages = []
        }
        
      },
      error: (_) => {
        this.messages = []
        this.categoryValues = []
        this.categories = []
      },
      complete: () => {}
    });
  }

  toggleDetail(item: string) {
    (window as any).toggleDetail(item);
  }

  getItems(): string[] {
    return this.messages;
  }

  getCategories(): string[][] {
    let categories = this.categories
    let result: string[][] = []
    this.categoryValues.map((arr,idx) => {
      result.push([])
      for (let index = 0; index < categories.length; index++) {
        const c = categories[index];
        const f = arr[index];
        if (f === 1) result[idx].push(c)
      }
    })
    return result
  }
}
