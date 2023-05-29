import { Chart, ChartData, ChartType, ChartOptions } from 'node_modules/chart.js';

export class ChartModule { 
  public id: string;
  public type: ChartType;
  public data: ChartData;
  public options: ChartOptions;

  constructor(id: string, type: ChartType, data: ChartData, options?:ChartOptions){
    this.id = id;
    this.type = type;
    this.data = data;
    this.options = options;

  }
}
