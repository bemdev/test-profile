import React, { useState, useEffect } from 'react'
import { cn } from '@bem-react/classname'

import Form from '../../common.blocks/Form/Form'

import './Index.css'
import { router } from '../../../router'

export const blockName = cn('Index')()

const Index = () => {

    const [formView, setFormView] = useState('singin')
    const username = localStorage.getItem('name')

    useEffect(() => {
        if (username) router.navigate('peoples')
    }, [username])

    return !username ? (
        <div className={blockName}>
            <Form setFormView={setFormView} view={formView} />
        </div>
    ) : null
}

export default Index