import { db } from '../index'
import { Account, AccountEdit } from '../types'
import { saveFileFromClient } from './file'

export const getAccount = async (data: Account) => {
    return db.collection('accounts').findOne(data, { projection: { _id: false, password: false } })
}

export const setAccount = async (data: AccountEdit) => {
    const user = await db.collection('accounts').findOne({ email: data.email })

    if (user?.name) {
        data = await saveFileFromClient(data)
        const isNewPassword = data.password.length > 0

        return db.collection('accounts').updateOne(
            { name: user.name },
            {
                $set: {
                    name: data.name,
                    password: isNewPassword ? Buffer.from(data.password, 'binary').toString('base64') : user.password
                }
            }
        ).then(() => data)
    } else {
        return null
    }
}