"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_1 = __importDefault(require("../models/user"));
const PasswordException_1 = __importDefault(require("../exception/PasswordException"));
class AuthController {
    constructor() {
        this.refreshToken = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.checkToken = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.AuthController = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    try {
        let user = yield user_1.default.select({ email: data.email });
        if (user.length < 0)
            throw new Error(`Une ou plusieurs données sont erronnées`);
        user = user[0];
        const isOk = yield PasswordException_1.default.comparePassword(data.password, user.password);
        if (!isOk)
            throw new Error(`L'utilisateur n'est pas défini`);
        const theToken = yield jsonwebtoken_1.sign({ id: user.idUser, name: user.fullname }, process.env.JWT_KEY, { expiresIn: '5m' });
        const token = {
            token: theToken,
            expired: yield jsonwebtoken_1.decode(theToken).exp
        };
        return res.status(200).json(token);
    }
    catch (err) {
        return res.status(409).json({ error: true, message: err.message }).end();
    }
});
/**
 *
 *
 * @static
 * @memberof AuthController
 */
AuthController.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    try {
        if (yield user_1.default.isExiste(data.email))
            throw new Error(`Un compte utilisant cet adresse mail est déjà enregistré`);
        const user = new user_1.default(data.idUser, data.prenom, data.nom, data.dateNaissance, data.email, data.password, data.sexe);
        yield user.save();
        const pass = yield PasswordException_1.default.hashPassword(data.password);
        const theToken = yield jsonwebtoken_1.sign({ id: user.idUser, nom: user.nom, prenom: user.prenom }, process.env.JWT_KEY, { expiresIn: '5m' });
        const token = {
            token: theToken,
            expired: yield jsonwebtoken_1.decode(theToken).exp
        };
        return res.status(200).json(token);
    }
    catch (err) {
        return res.status(409).json({ error: true, message: err.message }).end();
    }
});
