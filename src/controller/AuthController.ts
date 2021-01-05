import { decode, sign } from 'jsonwebtoken';
import { Request, Response } from 'express';


import User from '../models/user';
import PasswordException from '../exception/PasswordException';

export class AuthController {

    static login = async(req: Request, res: Response) => {

        let data: any = req.body;

        try {
            let user: any = await User.select({ email: data.email });
            if (user.length < 0)
                throw new Error(`Une ou plusieurs données sont erronnées`)
            user = user[0];

            const isOk = await PasswordException.comparePassword(data.password, user.password);

            if (!isOk)
                throw new Error(`L'utilisateur n'est pas défini`)

            const theToken: any = await sign({ id: user.idUser, name: user.fullname }, < string > process.env.JWT_KEY, { expiresIn: '5m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(200).json(token);
        } catch (err) {
            return res.status(409).json({ error: true, message: err.message }).end();
        }
    }

    /**
     *
     *
     * @static
     * @memberof AuthController
     */
    static register = async(req: Request, res: Response) => {
        let data: any = req.body;

        try {
            if (await User.isExiste(data.email))
                throw new Error(`Un compte utilisant cet adresse mail est déjà enregistré`)

            const user = new User(data.idUser, data.prenom, data.nom, data.dateNaissance, data.email, data.password, data.sexe);
            await user.save();
            const pass = await PasswordException.hashPassword(data.password);

            const theToken: any = await sign({ id: user.idUser, nom: user.nom, prenom: user.prenom }, < string > process.env.JWT_KEY, { expiresIn: '5m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(200).json(token);

        } catch (err) {
            return res.status(409).json({ error: true, message: err.message }).end();
        }
    }

    refreshToken = async(req: Request, res: Response) => {}
    checkToken = async(req: Request, res: Response) => {}
    logout = async(req: Request, res: Response) => {}

}