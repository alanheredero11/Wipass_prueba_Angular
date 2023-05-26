import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartModule } from 'src/app/models/bar-chart/chart.module';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{
  @Input() bar_chart: ChartModule; 
  
  ngOnInit(): void {
    document.getElementById('chart_id').id = this.bar_chart.id;
    this.RenderChart();
  }
  
  RenderChart() {
    new Chart(this.bar_chart.id, {
      type: 'bar',
      data: this.bar_chart.data
      });
  }

  

  /* Para renderiar el grafico esperamos recibir los datos del componente padre, este nos pasa un objeto de tipo ChartModule que incluye el id del grafico y el data necesario */

}
