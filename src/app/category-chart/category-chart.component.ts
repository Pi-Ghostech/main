import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Error,Category} from "../Entity/Error";
import {ErrorsService} from "../Services/ErrorService/errors.service";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";


@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.css']
})
export class CategoryChartComponent implements OnInit {

  listErrors: Error[] = [];
  error!: Error;

  // Chart data properties
  chartData: ChartDataset[] = [];
  chartLabels: string[] = Object.values(Category);

  chartType: ChartType = 'bar'; // Change to 'bar' for a bar chart
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Category Distribution',
        font: {
          size: 16,
        },

      },
      tooltip: {
        enabled: true
      }
    }
  };

  constructor(
    private service: ErrorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.error = new Error();
    this.getErrors();
  }

  getErrors() {
    this.service.getErrors().subscribe(
      (errors: Error[]) => {
        this.listErrors = errors;
        console.log('Errors retrieved successfully');
        this.updateChartData();
      },
      (error) => {
        console.error('Failed to retrieve errors:', error);
      }
    );
  }

  updateChartData() {
    const categoryCounts: { [key in Category]: number } = {
      [Category.Front_end]: 0,
      [Category.Back_end]: 0,
      [Category.DevOps]: 0,
      [Category.Cloud_Computing]: 0,
      [Category.Data_Science]: 0,
      [Category.Mobile_Development]: 0,
      [Category.Cybersecurity]: 0,
      [Category.AI_and_Machine_Learning]: 0,
      [Category.Other]: 0
    };

    // Iterate over listErrors and update category counts
    for (const error of this.listErrors) {
      categoryCounts[error.category]++;
    }

    // Convert categoryCounts into an array of numbers
    const data: number[] = Object.values(categoryCounts);

    // Update chartData with the new data
    this.chartData = [{ data }];
  }

}
