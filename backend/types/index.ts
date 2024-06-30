import { ReadStream } from "fs"

export interface Account {
    email: string,
    name: string,
    birthday: string,
    gender: string,
    attachment?: ReadStream
    avatarUrl: string
}

export interface AccountEdit {
    name: string,
    email: string,
    password: string,
    attachment?: ReadStream,
    avatarUrl: string
}

export interface SingIn {
    email: string,
    password: string
}

export interface SingUp extends Account {
    password: string,
}

