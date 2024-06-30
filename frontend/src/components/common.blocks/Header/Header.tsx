import React from 'react'
import { cn } from '@bem-react/classname'

import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Image } from '@yandex/ui/Image/desktop';
import Navigation from '../Navigation/Navigation'

import './Header.css'

export const blockName = cn('Header')()
const userInfoName = cn('Header', 'user')()

const { version } = require('../../../../package.json')
const { name } = require('../../../../package.json')

const Header = () => {

    const username = localStorage.getItem('name')
    const avatarUrl = localStorage.getItem('avatarUrl')

    return (
        <header className={blockName}>
            <div className={userInfoName}>
                <Image width={33} src={`http://localhost:8081/${avatarUrl}`} />
                <Text>{username}</Text>
            </div>
            <Text>{name} - v{version}</Text>
            <Navigation />
        </header>
    )
}

export default Header