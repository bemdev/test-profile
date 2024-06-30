import { db } from '../index'
import { SingIn } from '../types'

export const singin = async (data: SingIn) => {
    data.password = Buffer.from(data.password, 'binary').toString('base64')
    return db.collection('accounts').findOne(data, { projection: { _id: false, password: false } })
}