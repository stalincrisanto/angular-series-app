import { Component, Input, OnInit } from '@angular/core';
import { SerieScore } from '../../../types/series.types';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {

  showTable: boolean= true;

  @Input() series;

  constructor() { }

  ngOnInit(): void {
  }

  onImageError(event){
    console.log("event", {event});
    
  }

  test(event){
    console.log("evendsadsadt");
  }

}
