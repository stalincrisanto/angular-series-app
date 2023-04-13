import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, switchMap } from "rxjs";
import { SeriesService } from "../../services/series.service";
import { Serie } from "../../types/series.types";
import { Image } from "../../types/images.types";
import { Character } from "../../types/characters.type";

@Component({
  selector: "app-seriedetail",
  templateUrl: "./seriedetail.component.html",
  styleUrls: ["./seriedetail.component.css"],
})
export class SeriedetailComponent implements OnInit {
  serie: Serie;
  images: Image[];
  characters: Character[];
  isCollapsedCharacters = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ serieCode }) =>
          combineLatest([
            this.seriesService.getSerieByCode(serieCode),
            this.seriesService.getSerieImagesByCode(serieCode)
          ])
        )
      )
      .subscribe(([serie, images]) => {
        // TODO: generate random numbers to slice array of images
        // const aleatoryNumber = this.generateAleatoryNumber(0, images.length);
        // console.log("aleatoryNumber",aleatoryNumber);
        // console.log("serie", serie.name);
        const { _embedded } = serie;
        this.serie = serie;
        this.images = images.slice(0, 5);
        this.characters = _embedded.cast;
      });
  }

  generateAleatoryNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
