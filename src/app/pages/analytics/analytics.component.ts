import { Component, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartModule } from 'src/app/models/chart.module';

Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent {
  public headerTitle: string;
  public bar_chart: ChartModule;
  public bar_chart2: ChartModule;
  public pie_chart: ChartModule;
  public pie_chart2: ChartModule;
  public line_chart: ChartModule;
  public line_chart2: ChartModule;
  public bubble_chart: ChartModule;
  public bubble_chart2: ChartModule;
  public polar_chart: ChartModule;
  public polar_chart2: ChartModule;
  public radar_chart: ChartModule;
  public radar_chart2: ChartModule;

  constructor(){
  

  // Grafico de Barras
  const bar_chart_data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Barras",
      data: [389, 198, 33, 145],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
  }
  this.bar_chart = new ChartModule("bar_chart", "bar", bar_chart_data);

  // Grafico de Barras 2
  const bar_chart2_data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Barras",
      data: [290, 398, 360, 125],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
  }

  this.bar_chart2 = new ChartModule("bar-chart2", "bar", bar_chart2_data);

  // Grafico de porcentajes
  const pie_chart_data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Pastel",
      data: [389, 198, 33, 145],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
  };

  this.pie_chart = new ChartModule("pie-chart", 'pie', pie_chart_data)

  // Grafico de porcentajes2
  const pie_chart2_data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Pastel",
      data: [290, 398, 360, 125],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
  };

  this.pie_chart2 = new ChartModule("pie-chart2", 'pie', pie_chart2_data)
  
//Grafico Lineal

const line_chart_lineal = {
labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: "Nuevo",
        data: [340, 380, 320, 310],
        backgroundColor: '#F99B7D',
        borderColor: '#F99B7D',
        fill: false,
        tension: 0.1
      },
      {
        label: "Segunda Mano",
        data: [120, 180, 200, 110],
        backgroundColor: '#E76161',
        borderColor: '#E76161',
        fill: false,
        tension: 0.1
      },
      {
        label: "Averiado",
        data: [40, 80, 20, 10],
        backgroundColor: '#B04759',
        borderColor: '#B04759',
        fill: false,
        tension: 0.1
      },
      {
        label: "Desguace",
        data: [270, 260, 290, 210],
        backgroundColor: '#8BACAA',
        borderColor: '#8BACAA',
        fill: false,
        tension: 0.1
      } 
  ]}

  this.line_chart = new ChartModule("line_chart", 'line', line_chart_lineal);

  // Hay que poner de esta forma la data para que los datasets para que no den error de tipado

// Grafico lineal 2

const line_chart2_lineal = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: "Nuevo",
          data: [130, 532, 340, 110],
          backgroundColor: '#F99B7D',
          borderColor: '#F99B7D',
          fill: false,
          tension: 0.1
        },
        {
          label: "Segunda Mano",
          data: [330, 300, 100, 140],
          backgroundColor: '#E76161',
          borderColor: '#E76161',
          fill: false,
          tension: 0.1
        },
        {
          label: "Averiado",
          data: [410, 180, 220, 130],
          backgroundColor: '#B04759',
          borderColor: '#B04759',
          fill: false,
          tension: 0.1
        },
        {
          label: "Desguace",
          data: [250, 360, 230, 110],
          backgroundColor: '#8BACAA',
          borderColor: '#8BACAA',
          fill: false,
          tension: 0.1
        } 
      ]}

this.line_chart2 = new ChartModule("line_chart2", 'line', line_chart2_lineal);

// Grafico de Burbujas

const bubble_chart_data = {
  datasets: [{
    label: 'First Example',
    data: [{
        x: 20,
        y: 30,
        r: 15
      },
      {
        x: 10,
        y: 40,
        r: 10
      },
      {
        x: 30,
        y: 20,
        r: 8
      },
      {
        x: 40,
        y: 10,
        r: 12
      }],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
}

this.bubble_chart = new ChartModule('buble_chart', 'bubble', bubble_chart_data)

// Grafico de Burbujas 2

const bubble_chart2_data = {
  datasets: [{
    label: 'First Example',
    data: [{
        x: 34,
        y: 26,
        r: 15
      },
      {
        x: 23,
        y: 34,
        r: 10
      },
      {
        x: 12,
        y: 22,
        r: 8
      },
      {
        x: 28,
        y: 22,
        r: 12
      }],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
}

this.bubble_chart2 = new ChartModule('buble_chart2', 'bubble', bubble_chart2_data)

// Grafico polar 

const polar_chart_data = {
  labels: ['Area1', 'Area2', 'Area3', 'Area4'],
  datasets: [{
    label: 'First Example',
    data: [11, 24, 18, 20],
    backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
  }]
}

this.polar_chart = new ChartModule('polar_chart', 'polarArea', polar_chart_data)

// Grafico Polar 2
  
  const polar_chart2_data = {
    labels: ['Area1', 'Area2', 'Area3', 'Area4'],
    datasets: [{
      label: 'First Example',
      data: [24, 28, 19, 21],
      backgroundColor: ["#F99B7D", "#E76161", "#B04759", "#8BACAA"]
    }]
  }

  this.polar_chart2 = new ChartModule('polar_chart2', 'polarArea', polar_chart2_data)

// Grafico Radar

 const radar_chart_data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'First Example',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgb(249, 155, 125, 0.2)',
    borderColor: 'rgb(249, 155, 125)',
    pointBackgroundColor: 'rgb(249, 155, 125)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(249, 155, 125)'
  },
  {
    label: 'Second Example',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgb(231, 97, 97, 0.2)',
    borderColor: 'rgb(231, 97, 97)',
    pointBackgroundColor: 'rgb(231, 97, 97)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(231, 97, 97)'
  },
  ]
 }

 this.radar_chart = new ChartModule('radar_chart', 'radar', radar_chart_data)


  } 
}

