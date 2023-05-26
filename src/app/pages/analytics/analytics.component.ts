import { Component, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartModule } from 'src/app/models/bar-chart/chart.module';

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

  constructor(){
  
  let id = "bar_chart";
  let data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Barras",
      data: [389, 198, 33, 145],
      backgroundColor: ["#4C4C6D", "#1B9C85", "#E8F6EF", "#FFE194"]
    }]
  }
  this.bar_chart = new ChartModule(id, data);


  id = "bar-chart2";
  data = {
    labels: ["Nuevos","Segunda Mano", "Averiados", "Desguace"],
    datasets: [{
      label:"Grafico Barras",
      data: [290, 398, 360, 125],
      backgroundColor: ["#4C4C6D", "#1B9C85", "#E8F6EF", "#FFE194"]
    }]
  }

  this.bar_chart2 = new ChartModule(id, data);

  let id_html = document.getElementsByTagName('canvas')
  console.log(id_html);

  }
  
  


  // ngOnInit(): void {
  //   this.RenderChart();
  // }
  

  // RenderChart(){

// Grafico barras

//     let graph = "bar-chart";
//     let labels = ["Nuevos","Segunda Mano", "Averiados", "Desguace"]
//     let colors = ["#4C4C6D", "#1B9C85", "#E8F6EF", "#FFE194"]
//     let data = {
//       labels: labels,
//       datasets: [{
//         label:"Grafico Barras",
//         data: [389, 198, 33, 145],
//         backgroundColor: colors
//       }]
//     };
        
//     new Chart(graph, {
//       type: 'bar',
//       data: data,
//       });

// // Grafico pastel
  
//   graph = "pie-chart";
//   labels = ["Nuevos","Segunda Mano", "Averiados", "Desguace"]
//   colors = ["#4C4C6D", "#1B9C85", "#E8F6EF", "#FFE194"]
//   data = {
//       labels: labels,
//       datasets: [{
//         label:"Grafico Pastel",
//         data: [389, 198, 33, 145],
//         backgroundColor: colors
//       }]
//     };
        
//     new Chart(graph, {
//       type: 'pie',
//       data: data,
//       });

// // Grafico lineal

//     graph = "lineal-chart";

//     let dataset1 = {
//       label: "Nuevo",
//       data: [340, 380, 320, 310],
//       backgroundColor: '#4C4C6D',
//       borderColor: '#4C4C6D',
//       fill: false,
//       tension: 0.1
//     }
//     let dataset2 = {
//       label: "Segunda Mano",
//       data: [120, 180, 200, 110],
//       backgroundColor: '#1B9C85',
//       borderColor: '#1B9C85',
//       fill: false,
//       tension: 0.1
//     }
//     let dataset3 = {
//       label: "Averiado",
//       data: [40, 80, 20, 10],
//       backgroundColor: '#E8F6EF',
//       borderColor: '#E8F6EF',
//       fill: false,
//       tension: 0.1
//     }
//     let dataset4 = {
//       label: "Desguace",
//       data: [270, 260, 290, 210],
//       backgroundColor: '#FFE194',
//       borderColor: '#FFE194',
//       fill: false,
//       tension: 0.1
//     }
        
//     new Chart(graph,{
//       type: 'line',
//       data: 
//       {
//         labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
//         datasets: [
//           dataset1, dataset2, dataset3, dataset4],
//       },
//       });
//     }; 

    

  }

