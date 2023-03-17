import { Component, OnInit } from "@angular/core";
import { BettercallsaulService } from "../services/bettercallsaul.service";
import { Character } from '../types/character';

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
})
export class CharacterComponent implements OnInit {
  constructor(private btsService: BettercallsaulService) {}
  characters: Character[] = [];

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    console.log("entro en la función");
    this.btsService.getAllCharacters().subscribe((characters) => {
      this.characters = characters;
    })
  }
}
