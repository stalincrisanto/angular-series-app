import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Serie, SerieScore } from '../types/series.types';

@Injectable({
  providedIn: "root",
})
export class SeriesService {

  private apiUrl: string = 'https://api.tvmaze.com/search/shows?q=game of';

  constructor(private http: HttpClient) {}

  getAllSeries(): Observable<SerieScore[]> {
    return this.http.get<SerieScore[]>(this.apiUrl);
  }
}
