import express from 'express'
import { Request, Response, NextFunction } from "express"

import { setAccount } from '../../controllers/account';

const router = express.Router();

router.post('/account', async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    setAccount(data)
        .then(result => {
            if (result) return res.send(result)
            return res.status(404).send('Sorry, cant edit that')
        })
        .catch(error => res.sendStatus(404))
});

export default router