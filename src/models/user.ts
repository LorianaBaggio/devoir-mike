export default class user{
  
  private idUser: number;
  private prenom: string;
  private nom: string;
  private email: string;
  private password: string = '';
  private sexe: string;
  private role: string;
  private dateNaissance: string = '';
  private creation: string = '';
  private update: string = '';
  private subscription: string;


  constructor(id: number, firstname: string, lastname: string, userEmail: string, userPassword: string, userSexe: string, userRole: string, birthDate: string = '', creationDate: string = '', updateDate: string = '', subscriptionDate: string = '') {
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
}