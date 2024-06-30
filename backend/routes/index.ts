import express from 'express'

import singinRouter from './api/singin'
import singupRouter from './api/singup'
import accountRouter from './api/account'
import peopleRouter from './api/people'

const router = express.Router();

router.use('/', singinRouter)
router.use('/', singupRouter)
router.use('/', accountRouter)
router.use('/', peopleRouter)

export default router