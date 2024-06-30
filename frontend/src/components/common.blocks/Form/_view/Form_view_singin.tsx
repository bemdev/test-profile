import React, { useCallback } from 'react'
import { Enhance, withBemMod } from '@bem-react/core'

import { Textinput } from '@yandex/ui/Textinput/desktop/bundle'
import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Button } from '@yandex/ui/Button/desktop/bundle'
import { Link } from '@yandex/ui/Link/desktop/bundle'

import './Form_view_singin.css'

import { IFormProps, blockName, controlName } from '../Form'

import { useForm } from '../hooks'
import { INPUTS } from '../constants'
import { router } from '../../../../router'

interface IFormViewSinginProps extends IFormProps { }

const FormView: Enhance<IFormViewSinginProps> = () => {
    const { formRef, handleSubmit, loading } = useForm('http://localhost:8081/api/singin', 'POST')

    const toLocalStorage = useCallback(async (e) => {
        try {
            const result = await handleSubmit(e)
            const user = await result.json()
            Object.keys(user).forEach(key => {
                if (key === 'attachment') return
                localStorage.setItem(key, user[key])
            })
            router.navigate('peoples')
        } catch (error) {
            console.log("Can't login, please try again")
        }
    }, [handleSubmit])

    return ({ className, setFormView }) => {

        const handleChangeView = () => setFormView && setFormView('singup')

        return <form ref={formRef} onSubmit={toLocalStorage} className={`${blockName} ${className}`}>
            <Text align='center' weight='bold' typography='headline-s'>Авторизация</Text>
            {['email', 'password'].map((key, index) => {
                return <Textinput
                    hasClear
                    type={key}
                    // pattern={INPUTS[key].validation}
                    placeholder={INPUTS[key].placeholder}
                    key={index}
                    size='s'
                    view='default'
                    name={key}
                />
            })}
            <div className={controlName}>
                <Link theme='pseudo' pseudo onClick={handleChangeView}>регистрация</Link>
                <Button progress={loading} size='s' theme='action' type='submit'>Войти</Button>
            </div>
        </form>
    }
}

export const FormViewSingin = withBemMod('Form', { view: 'singin' }, FormView)
