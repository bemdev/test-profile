import React, { useState } from 'react'
import { Enhance, withBemMod } from '@bem-react/core'

import { Textinput } from '@yandex/ui/Textinput/desktop/bundle'
import { Attach } from '@yandex/ui/Attach/desktop/bundle'
import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Button } from '@yandex/ui/Button/desktop/bundle'
import { Link } from '@yandex/ui/Link/desktop/bundle'

import './Form_view_singup.css'

import { IFormProps, blockName, controlName } from '../Form'

import { INPUTS } from '../constants'
import { useForm } from '../hooks'

interface IFormViewSingupProps extends IFormProps { }

const FormView: Enhance<IFormViewSingupProps> = () => {
    const { formRef, handleSubmit, loading } = useForm('http://localhost:8081/api/singup', 'POST')

    return ({ className, setFormView }) => {

        const handleChangeView = () => setFormView && setFormView('singin')

        return <form ref={formRef} onSubmit={handleSubmit} className={`${blockName} ${className}`}>
            <Text align='center' weight='bold' typography='headline-s'>Регистрация</Text>
            {
                ['email', 'password', 'name', 'birthday', 'gender'].map((key, index) => {
                    return <Textinput
                        hasClear
                        type={INPUTS[key].type}
                        // pattern={INPUTS[key].validation}
                        placeholder={INPUTS[key].placeholder}
                        key={index}
                        size='s'
                        view='default'
                        name={key}
                    />
                })
            }
            <Attach accept='image/*' holderTextWidth={100} name='attachment' hasHolder holderText="Файл не выбран" view="default" size="s">
                Загрузить аватар
            </Attach>
            <div className={controlName}>
                <Link theme='pseudo' pseudo onClick={handleChangeView}>авторизация</Link>
                <Button progress={loading} size='s' theme='action' type='submit'>Зарегистрироваться</Button>
            </div>
        </form>
    }
}

export const FormViewSingup = withBemMod('Form', { view: 'singup' }, FormView)
