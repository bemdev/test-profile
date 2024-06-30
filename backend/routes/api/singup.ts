import express from 'express'
import { Request, Response, NextFunction } from "express"

import { singup } from '../../controllers/singup';

const router = express.Router();

router.post('/singup', async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    singup(data)
        .then(result => {
            if (result) return res.send('OK')
            return res.status(400).send('Sorry, cant add that');
        })
        .catch(error => res.sendStatus(401))
});

export default router