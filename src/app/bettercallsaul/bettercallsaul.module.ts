import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterComponent } from "./character/character.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { EpisodeComponent } from "./episode/episode.component";
import { RouterModule } from "@angular/router";
import { QuoteComponent } from "./quote/quote.component";
import { TabComponent } from "./character/components/tab/tab.components";

@NgModule({
  declarations: [
    CharacterComponent,
    EpisodeComponent,
    QuoteComponent,
    TabComponent
  ],
  imports: [CommonModule, TabsModule, RouterModule],
  exports: [CharacterComponent, EpisodeComponent, QuoteComponent],
})
export class BetterCallSaulModule {}
