export interface billInterfaces {
  idBill: number;
  idStripe: number;
  paiement: string;
  montantHt: number;
  montantTTC: number;
  source: string | null;
  creation: string;
  update: string;  
  attributInsert ? : Array < string > ;
}