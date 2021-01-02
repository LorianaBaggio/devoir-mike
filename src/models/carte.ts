export default class carte{
  
  private idCarte: number;
  private idUser: number;
  private card: number;
  private month: number;
  private year: number;
  private default: boolean;


  constructor(id: number, userId: number, cardNumber: number, cardMonth: number, cardYear: number, cardDefault: boolean) {
      this.idCarte = id;
      this.idUser = userId;
      this.card = cardNumber;
      this.month = cardMonth;
      this.year = cardYear;
      this.default = cardDefault;
  }

  get id(): number {
      return this.idCarte;
  }

  get userId(): number {
    return this.idUser;
  }

  get cardNumber(): number {
      return this.card;
  }
  
  get cardMonth() : number {
    return this.month;
  }

  get cardYear() : number {
    return this.year;
  }

  get cardDefault() : boolean {
    return this.default;
  }
}