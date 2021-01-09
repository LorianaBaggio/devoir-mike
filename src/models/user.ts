import MySQL, { jointureInterface } from '../db/MySQL';

import EmailException from '../exception/EmailException';
import PasswordException from '../exception/PasswordException';

export default class user{
  save() {
      throw new Error('Method not implemented.');
  }
  
  idUser: number;
  prenom: string;
  nom: string;
  private email: string;
  private password: string = '';
  private sexe: string;
  private role: string;
  private dateNaissance: string = '';
  private creation: string = '';
  private update: string = '';
  private subscription: string;


  constructor(id: number, firstname: string, lastname: string, userEmail: string, userPassword: string, userSexe: string, userRole: string, birthDate: string = '', creationDate: string = '', updateDate: string = '', subscriptionDate: string = '') {
      
    if (EmailException.checkEmail(userEmail))
      throw new EmailException()
    if (!PasswordException.isValidPassword(userPassword))
      throw new PasswordException()
  
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

  get attributInsert(): Array < string > {
    return [`idUser`, `prenom`, `nom`, `email`, `password`, `sexe`, `role`, `dateNaissance`, `creation`, `update`, `subscription`]
  };

  get id(): number {
    return this.idUser;
  }

  get firstname(): string {
    return this.prenom;
  }

  get lastname(): string {
      return this.nom;
  }
  
  get userEmail() : string {
    return this.email;
  }

  get userPassword() : string {
    return this.password
  }

  get userSexe() : string {
    return this.sexe;
  }

  get userRole() : string {
    return this.role;
  }

  get birthDate() : string {
    return this.dateNaissance;
  }

  get creationDate() : string {
    return this.creation;
  }

  get updateDate() : string {
    return this.update;
  }

  get subscriptionDate() : string {
    return this.subscription;
  }

  static select(where: any) {
    return new Promise((resolve, reject) => {
        const join: Array < jointureInterface > = [{
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
        }, ]
        MySQL.selectJoin('user', join, where).then((arrayUser: Array < any > ) => {
                let newUser: user;
                let data: Array < user > = [];
                for (const User of arrayUser) {
                    User.dateNaiss = new String(User.dateNaissance)
                    User.id = User.idUser;
                    newUser = new User(User);
                    data.push(new User(newUser, User.email, User.password));
                }
                console.log(data);
                resolve(data)
            })
            .catch((err: any) => {
                console.log(err);
                reject(false)
            });
    })
}

  static isExiste(email: string) {
    return new Promise((resolve, reject) => {
        MySQL.select('user', { email: email }).then((arrayClient: Array < any > ) => {
                resolve((arrayClient.length > 0))
            })
            .catch((err: any) => {
                console.log(err);
                reject(false)
            });
    })
  }
}