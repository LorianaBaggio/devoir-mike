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

            const theToken: any = await sign({ id: user.idUser, name: user.fullname }, < string > process.env.JWT_KEY, { expiresIn: '1m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);
        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
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
            if (await user.isExiste(data.email))
                throw new Error(`Un compte utilisant cet adresse mail est déjà enregistré`)

            const User = new user(null, data.prenom, data.nom, data.dateNaissance, data.email, data.password, data.sexe);
            await User.save();
            const pass = await PasswordException.hashPassword(data.password);
            const user = new User(User, data.email, pass);
            await user.save();

            const theToken: any = await sign({ id: user.idUser, name: user.fullname }, < string > process.env.JWT_KEY, { expiresIn: '1m' })

            const token = {
                token: theToken,
                expired: await ( < any > decode(theToken)).exp
            }
            return res.status(201).json(token);

        } catch (err) {
            return res.status(401).json({ error: true, message: err.message }).end();
        }
    }

    refreshToken = async(req: Request, res: Response) => {}
    checkToken = async(req: Request, res: Response) => {}
    logout = async(req: Request, res: Response) => {}

}