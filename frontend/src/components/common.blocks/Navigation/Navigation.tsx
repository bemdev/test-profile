import React from 'react'
import { cn } from '@bem-react/classname'

import { Link as NavigationLink } from 'react-router-dom'

import './Navigation.css'

export const blockName = cn('Navigation')()

const Navigation = () => <nav className={blockName}>
    <NavigationLink to='/account'>Account</NavigationLink>
    <NavigationLink to='/peoples'>Peoples</NavigationLink>
    <NavigationLink to='/logout'>Logout</NavigationLink>
</nav>

export default Navigation