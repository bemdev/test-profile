import React, { FC } from 'react'
import { IClassNameProps } from '@bem-react/core'

import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Image } from '@yandex/ui/Image/desktop/bundle'

import { cn } from '@bem-react/classname'

import './Card.css'

export const blockName = cn('Card')()

interface ICardProps extends IClassNameProps {
    people: {
        avatarUrl: string
        birthday: string
        name: string
    }
}

const calculateAge = (birthday: string) => {
    const year = Number(birthday.split('-').shift())
    const nowYear = new Date().getFullYear()
    return nowYear - year
}

const Card: FC<ICardProps> = ({ people }) => <div className={blockName}>
    <Image width={50} height={50} src={`http://localhost:8081${people.avatarUrl}`} />
    <Text>Имя: {people.name}</Text>
    <Text>Возраст: {calculateAge(people.birthday)}</Text>
</div>

export default Card
