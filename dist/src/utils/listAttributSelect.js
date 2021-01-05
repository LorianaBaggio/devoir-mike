"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * List of the property retrieved for the Select method
 * @readonly
 * @type {Array < string >}
 */
const listAttributSelect = {
    "user": {
        primaryKey: `idUser`,
        attribut: [`idUser`, `prenom`, `nom`, `email`, `password`, `sexe`, `role`, `dateNaissance`, `creation`, `update`, `subscription`]
    },
    "bill": {
        primaryKey: `idBill`,
        attribut: [`idBill`, `idStripe`, `paiement`, `montantHt`, `montantTTC`, `source`, `creation`, `update`]
    },
    "carte": {
        primaryKey: `idCarte`,
        attribut: [`idCarte`, `iduser`, `card`, `month`, `year`, `default`]
    },
    "song": {
        primaryKey: `idSong`,
        attribut: [`idSong`, `name`, `url`, `time`, `creation`, `update`, `type`]
    },
};
// export default { listAttributSelect, listeTables };
exports.default = listAttributSelect;
