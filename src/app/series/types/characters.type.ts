export interface Embedded {
    cast: Character[];
}

export interface Character {
    person:    Person;
    character: Cast;
    self:      boolean;
    voice:     boolean;
}

export interface Cast {
    id:     number;
    url:    string;
    name:   string;
    image:  Image;
    _links: CharacterLinks;
}

export interface CharacterLinks {
    self: Previousepisode;
}

export interface Previousepisode {
    href: string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Person {
    id:       number;
    url:      string;
    name:     string;
    country:  Country;
    birthday: Date;
    deathday: null;
    gender:   Gender;
    image:    Image;
    updated:  number;
    _links:   CharacterLinks;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface CharacterLinksClass {
    self:            Previousepisode;
    previousepisode: Previousepisode;
}