import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Serie, SerieScore } from '../types/series.types';
import { Image } from "../types/images.types";

@Injectable({
  providedIn: "root",
})
export class SeriesService {

  private apiUrl: string = 'https://api.tvmaze.com/search/shows?q=breaking';
  private showUrl: string = "https://api.tvmaze.com/shows";

  constructor(private http: HttpClient) {}

  getAllSeries(): Observable<SerieScore[]> {
    return this.http.get<SerieScore[]>(this.apiUrl);
  }

  getSerieByCode(serieCode: string): Observable<Serie> {
    return this.http.get<Serie>(`${this.showUrl}/${serieCode}`)
  }

  getSerieImagesByCode(serieCode: string): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.showUrl}/${serieCode}/images`)
  }
}
