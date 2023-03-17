import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "../types/character";

@Injectable({
  providedIn: "root",
})
export class BettercallsaulService {
  private apiUrl: string = "https://bettercallsaul-api.onrender.com";
  private proxyUrl: string = "https://thingproxy.freeboard.io/fetch"

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    const url = `${this.proxyUrl}/${this.apiUrl}/characters`;
    return this.http.get<Character[]>(url);
  }
}
