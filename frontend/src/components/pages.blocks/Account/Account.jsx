import React from 'react'
import { cn } from '@bem-react/classname'

import Header from '../../common.blocks/Header/Header'
import Form from '../../common.blocks/Form/Form'

import './Account.css'

export const blockName = cn('Account')()

const Account = () => <div className={blockName}>
    <Header />
    <Form view='profile' />
</div>

export default Account