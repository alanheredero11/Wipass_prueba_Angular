import { Chart, ChartData } from 'node_modules/chart.js';

export class ChartModule { 
  public id: string; 
  public data: ChartData;

  constructor(id: string, data: ChartData){
    this.id = id;
    this.data = data;

  }
}
