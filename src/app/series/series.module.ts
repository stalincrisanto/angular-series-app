import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsModule } from "ngx-bootstrap/tabs";
import { RatingModule } from "ngx-bootstrap/rating";
import { SerieslistComponent } from "./pages/serieslist/serieslist.component";
import { EpisodesComponent } from "./pages/episodes/episodes.component";
import { RouterModule } from "@angular/router";
import { TabComponent } from "./pages/serieslist/components/tab.components";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { SeriedetailComponent } from "./pages/seriedetail/seriedetail.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SerieslistComponent,
    EpisodesComponent,
    TabComponent,
    SeriedetailComponent,
  ],
  imports: [
    CommonModule,
    TabsModule,
    ProgressbarModule,
    RouterModule,
    RatingModule,
    FormsModule,
  ],
  exports: [SerieslistComponent, EpisodesComponent, SeriedetailComponent],
})
export class SeriesModule {}
