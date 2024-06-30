import { db } from '../index'
import { SingUp } from '../types'
import { saveFileFromClient } from './file'

export const singup = async (data: SingUp) => {
    const user = await db.collection('accounts').findOne({ email: data.email })

    if (user) {
        return null
    } else {
        data = await saveFileFromClient(data)
        data.password = Buffer.from(data.password, 'binary').toString('base64')
        return db.collection('accounts').insertOne(data)
    }
}