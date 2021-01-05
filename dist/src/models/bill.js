"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bill {
    constructor(id, stripeId, datePayment = '', htMontant, ttcMontant, billSource, creationDate = '', updateDate = '') {
        this.creation = '';
        this.update = '';
        this.idBill = id;
        this.idStripe = stripeId;
        this.paiement = datePayment;
        this.montantHt = htMontant;
        this.montantTTC = ttcMontant;
        this.source = (billSource === undefined) ? null : billSource;
        this.creation = creationDate;
        this.update = updateDate;
    }
    get attributInsert() {
        return [`idBill`, `idStripe`, `paiement`, `montantHt`, `montantTTC`, `source`, `creation`, `update`];
    }
    ;
    get id() {
        return this.idBill;
    }
    get stripeId() {
        return this.idStripe;
    }
    get datePayment() {
        return this.paiement;
    }
    get htMontant() {
        return this.montantHt;
    }
    get ttcMontant() {
        return this.montantTTC;
    }
    get billSource() {
        return (this.source === null) ? '' : this.source;
    }
    get creationDate() {
        return this.creation;
    }
    get updateDate() {
        return this.update;
    }
}
exports.default = bill;
