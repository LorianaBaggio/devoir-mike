export interface userInterfaces {
    idUser ? : number;
    prenom ? : string;
    nom ? : string;
    email ? : string;
    password ? : string;
    sexe ? : string;
    role ? : string;
    dateNaissance ? : string;
    creation ? : string;
    update ? : string;
    subscription ? : string;
    fullname ? : string;
    attributInsert ? : Array < string > ;
    save(): Promise < number > ;
}