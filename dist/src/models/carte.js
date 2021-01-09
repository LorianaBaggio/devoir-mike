"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class carte {
    constructor(id, userId, cardNumber, cardMonth, cardYear, cardDefault) {
        this.idCarte = id;
        this.idUser = userId;
        this.card = cardNumber;
        this.month = cardMonth;
        this.year = cardYear;
        this.default = cardDefault;
    }
    get attributInsert() {
        return [`idCarte`, `iduser`, `card`, `month`, `year`, `default`];
    }
    ;
    get id() {
        return this.idCarte;
    }
    get userId() {
        return this.idUser;
    }
    get cardNumber() {
        return this.card;
    }
    get cardMonth() {
        return this.month;
    }
    get cardYear() {
        return this.year;
    }
    get cardDefault() {
        return this.default;
    }
}
exports.default = carte;
