export interface Character {
    _id:             string;
    char_id:         number;
    name:            string;
    birthday:        string;
    occupation:      string[];
    img:             string;
    status:          Status;
    appearance:      number[];
    firstAppearance: string;
    lastAppearance:  string;
    nickname:        string[];
    portrayed:       string;
}

export enum Status {
    Alive = "Alive",
    Deceased = "Deceased",
}