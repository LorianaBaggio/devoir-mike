export default class bill{
  
  private idBill: number;
  private idStripe: number;
  private paiement: string;
  private montantHt: number;
  private montantTTC: number;
  private source: string | null;
  private creation: string = '';
  private update: string = '';


  constructor(id: number, stripeId: number, datePayment: string = '', htMontant: number, ttcMontant: number, billSource ? : string, creationDate: string = '', updateDate: string = '') {
      this.idBill = id;
      this.idStripe = stripeId;
      this.paiement = datePayment;
      this.montantHt = htMontant;
      this.montantTTC = ttcMontant;
      this.source = (billSource === undefined) ? null : billSource;
      this.creation = creationDate;
      this.update = updateDate;
  }

  get attributInsert(): Array < string > {
    return [`idBill`, `idStripe`, `paiement`, `montantHt`, `montantTTC`, `source`, `creation`, `update`]
  };

  get id(): number {
      return this.idBill;
  }

  get stripeId(): number {
    return this.idStripe;
  }

  get datePayment(): string {
      return this.paiement;
  }
  
  get htMontant() : number {
    return this.montantHt;
  }

  get ttcMontant() : number {
    return this.montantTTC
  }

  get billSource() : string {
    return (this.source === null) ? '' : this.source;
  }

  get creationDate() : string {
    return this.creation;
  }

  get updateDate() : string {
    return this.update;
  }
}