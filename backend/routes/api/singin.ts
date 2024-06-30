import express from 'express'
import { Request, Response, NextFunction } from "express"

import { singin } from '../../controllers/singin';

const router = express.Router();

router.post('/singin', async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    singin(data)
        .then(result => {
            if (result) return res.send(result)
            return res.status(404).send('Sorry, cant find that');
        })
        .catch(error => res.sendStatus(401))
});

export default router