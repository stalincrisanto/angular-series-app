import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsModule } from "ngx-bootstrap/tabs";
import { SerieslistComponent } from "./pages/serieslist/serieslist.component";
import { EpisodesComponent } from "./pages/episodes/episodes.component";
import { RouterModule } from "@angular/router";
import { TabComponent } from "./pages/serieslist/components/tab.components";

@NgModule({
  declarations: [SerieslistComponent, EpisodesComponent, TabComponent],
  imports: [CommonModule, TabsModule, RouterModule],
  exports: [SerieslistComponent, EpisodesComponent],
})
export class SeriesModule {}
