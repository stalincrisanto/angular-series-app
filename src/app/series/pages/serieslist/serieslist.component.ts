import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie, SerieScore } from '../../types/series.types';

@Component({
  selector: 'app-serieslist',
  templateUrl: './serieslist.component.html'
})
export class SerieslistComponent implements OnInit {

  series: SerieScore[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getAllSeries();
  }

  getAllSeries(){
    //AQUI NO IMPRIME EL VALOR DE this.series luego de asignarle el valor
    //TODO: splice for 6 results, but apperance got at first
    this.seriesService.getAllSeries().subscribe((series) => {
      console.log({series});
      // const series
      // console.log("series2", this.series);
      return (this.series = series);
    });
  }
}
