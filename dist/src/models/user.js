"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySQL_1 = __importDefault(require("../db/MySQL"));
const EmailException_1 = __importDefault(require("../exception/EmailException"));
const PasswordException_1 = __importDefault(require("../exception/PasswordException"));
class user {
    constructor(id, firstname, lastname, userEmail, userPassword, userSexe, userRole, birthDate = '', creationDate = '', updateDate = '', subscriptionDate = '') {
        this.password = '';
        this.dateNaissance = '';
        this.creation = '';
        this.update = '';
        if (EmailException_1.default.checkEmail(userEmail))
            throw new EmailException_1.default();
        if (!PasswordException_1.default.isValidPassword(userPassword))
            throw new PasswordException_1.default();
        this.idUser = id;
        this.prenom = firstname;
        this.nom = lastname;
        this.email = userEmail;
        this.password = userPassword;
        this.sexe = userSexe;
        this.role = userRole;
        this.dateNaissance = birthDate;
        this.creation = creationDate;
        this.update = updateDate;
        this.subscription = subscriptionDate;
    }
    save() {
        throw new Error('Method not implemented.');
    }
    get attributInsert() {
        return [`idUser`, `prenom`, `nom`, `email`, `password`, `sexe`, `role`, `dateNaissance`, `creation`, `update`, `subscription`];
    }
    ;
    get id() {
        return this.idUser;
    }
    get firstname() {
        return this.prenom;
    }
    get lastname() {
        return this.nom;
    }
    get userEmail() {
        return this.email;
    }
    get userPassword() {
        return this.password;
    }
    get userSexe() {
        return this.sexe;
    }
    get userRole() {
        return this.role;
    }
    get birthDate() {
        return this.dateNaissance;
    }
    get creationDate() {
        return this.creation;
    }
    get updateDate() {
        return this.update;
    }
    get subscriptionDate() {
        return this.subscription;
    }
    static select(where) {
        return new Promise((resolve, reject) => {
            const join = [{
                    type: 'LEFT',
                    table: 'user',
                    where: {
                        table: 'user',
                        foreignKey: 'idUser'
                    }
                }, {
                    type: 'LEFT',
                    table: 'bill',
                    where: {
                        table: 'user',
                        foreignKey: 'idBill'
                    }
                },];
            MySQL_1.default.selectJoin('user', join, where).then((arrayUser) => {
                let newUser;
                let data = [];
                for (const User of arrayUser) {
                    User.dateNaiss = new String(User.dateNaissance);
                    User.id = User.idUser;
                    newUser = new User(User);
                    data.push(new User(newUser, User.email, User.password));
                }
                console.log(data);
                resolve(data);
            })
                .catch((err) => {
                console.log(err);
                reject(false);
            });
        });
    }
    static isExiste(email) {
        return new Promise((resolve, reject) => {
            MySQL_1.default.select('user', { email: email }).then((arrayClient) => {
                resolve((arrayClient.length > 0));
            })
                .catch((err) => {
                console.log(err);
                reject(false);
            });
        });
    }
}
exports.default = user;
