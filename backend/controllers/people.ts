import { db } from '../index'

export const getPeoples = async (name: string) => {
    return (await db.collection('accounts')
        .find()
        .project({ _id: false, password: false })
        .toArray())
        .filter(user => user.name !== name)

}