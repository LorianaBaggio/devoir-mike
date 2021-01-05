"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMidd = exports.registerMidd = exports.authMidd = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const EmailException_1 = __importDefault(require("../exception/EmailException"));
const PasswordException_1 = __importDefault(require("../exception/PasswordException"));
const split = (token) => { return token.split('Bearer ').join(''); };
const authMidd = (req, res, next) => {
    // req.header.authorization = 'Bearer opfokre65ze4f6ez54f6ez4f6z4f6ze87f6ez4fe8z7fze486fez68fe6z5f4e6z54f8ef864ez84fe8ze.9e4fz9e64f6e5z4f6ez54f654ez
    try {
        if (req.headers.authorization && jsonwebtoken_1.verify(split(req.headers.authorization), process.env.JWT_KEY))
            return next();
        else
            throw new Error(`Une ou plusieurs données sont erronnées`);
    }
    catch (err) {
        return res.status(401).json({ error: true, message: err.message }).end();
    }
};
exports.authMidd = authMidd;
const registerMidd = (req, res, next) => {
    let data = req.body;
    const champsRequire = [`prenom`, `nom`, `email`, `password`, `dateNaissance`, `sexe`];
    try {
        let error = true;
        let textError = '';
        for (const require in champsRequire) {
            error = true;
            for (const champs in data) {
                if (champs === champsRequire[require])
                    error = false;
            }
            if (error)
                textError += `${champsRequire[require]}, `;
        }
        if (textError.length > 0) {
            textError = textError.slice(0, -2); // Delete ', '
            throw new Error(`Une ou plusieurs données obligatoires sont manquantes`);
        }
        if (EmailException_1.default.checkEmail(data.email)) // Check valid syntaxe email
            throw new EmailException_1.default();
        if (!PasswordException_1.default.isValidPassword(data.password)) // Check valid syntaxe password
            throw new PasswordException_1.default();
        next();
    }
    catch (err) {
        return res.status(401).json({ error: true, message: err.message }).end();
    }
};
exports.registerMidd = registerMidd;
const loginMidd = (req, res, next) => {
    let data = req.body;
    const champsRequire = [`email`, `password`];
    try {
        let error = true;
        let textError = '';
        for (const require in champsRequire) {
            error = true;
            for (const champs in data) {
                if (champs === champsRequire[require])
                    error = false;
            }
            if (error)
                textError += `${champsRequire[require]}, `;
        }
        if (textError.length > 0) {
            textError = textError.slice(0, -2); // Delete ', '
            throw new Error(`Email/password manquants`);
        }
        if (EmailException_1.default.checkEmail(data.email)) // Check valid syntaxe email
            throw new EmailException_1.default();
        if (!PasswordException_1.default.isValidPassword(data.password)) // Check valid syntaxe password
            throw new PasswordException_1.default();
        next();
    }
    catch (err) {
        return res.status(401).json({ error: true, message: err.message }).end();
    }
};
exports.loginMidd = loginMidd;
