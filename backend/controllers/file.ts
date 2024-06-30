import fs from 'fs'
import { SingUp, AccountEdit } from '../types'

export const saveFileFromClient = async <T extends SingUp | AccountEdit>(data: T): Promise<T> => {
    return new Promise((resolve) => {
        if (data.attachment) {
            const pathToAvatar = `/images/${btoa(data.email)}.png`
            const writter = fs.createWriteStream('public' + pathToAvatar, { flags: 'w' })
            data.avatarUrl = pathToAvatar

            data.attachment.pipe(writter)
            data.attachment.on('close', () => {
                delete data.attachment
                resolve(data)
            })
        } else {
            resolve(data)
        }
    })
}