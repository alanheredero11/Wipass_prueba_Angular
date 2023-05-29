import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartModule } from 'src/app/models/chart.module';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  @Input() chart: ChartModule; 
  @Input() style: undefined;
  
  ngOnInit(): void {
    document.getElementById('chart_id').id = this.chart.id;
    this.RenderChart();
  }

  RenderChart() {
    new Chart(this.chart.id, {
      type: this.chart.type,
      data: this.chart.data,
      options: this.chart.options
      });
  }

  

  /* Para renderiar el grafico esperamos recibir los datos del componente padre, este nos pasa un objeto de tipo ChartModule que incluye el id del grafico y el data necesario */

}
