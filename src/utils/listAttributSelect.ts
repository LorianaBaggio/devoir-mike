export type listeTables = "user" | "bill" | "carte" | "song";

interface attributSelectInterface {
    primaryKey: string;
    attribut: Array < string > ;
}

/**
 *
 * List of the property retrieved for the Select method
 * @readonly
 * @type {Array < string >}
 */
const listAttributSelect: Record < listeTables, attributSelectInterface > = { //Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.
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
export default listAttributSelect;