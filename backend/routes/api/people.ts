import express from 'express'
import { Request, Response, NextFunction } from "express"

import { getPeoples } from '../../controllers/people';

const router = express.Router();

router.post('/peoples', async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    getPeoples(data.name)
        .then(result => {
            if (result) return res.send(result)
            return res.status(404).send('Sorry, cant find that')
        })
        .catch(error => res.sendStatus(404))
});

export default router