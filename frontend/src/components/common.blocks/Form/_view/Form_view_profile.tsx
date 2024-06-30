import React, { useCallback } from 'react'
import { Enhance, withBemMod } from '@bem-react/core'

import { Textinput } from '@yandex/ui/Textinput/desktop/bundle'
import { Attach } from '@yandex/ui/Attach/desktop/bundle'
import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Button } from '@yandex/ui/Button/desktop/bundle'
import { Spacer } from '@yandex/ui/Spacer/desktop/index'
import './Form_view_profile.css'

import { IFormProps, blockName, controlName } from '../Form'

import { INPUTS } from '../constants'
import { useForm, useEdittebleValues } from '../hooks'

interface IFormViewProfileProps extends IFormProps { }

const FormView: Enhance<IFormViewProfileProps> = () => {
    const { formRef, handleSubmit, loading } = useForm('http://localhost:8081/api/account', 'POST')

    const email = localStorage.getItem('email')
    const username = localStorage.getItem('name')

    const { edittebleValues, handleChangeValues } = useEdittebleValues({
        name: username,
        password: null,
    })

    const toLocalStorage = useCallback(async (e) => {
        try {
            const result = await handleSubmit(e)
            const responseData = await result.json()
            Object.keys(responseData).forEach(key => {
                key === 'password' || 'attachment' && localStorage.setItem(key, responseData[key])
            })
        } catch (error) {
            console.log("Can't edit, please try again")
        }
    }, [handleSubmit])

    return ({ className }) => {

        return <form ref={formRef} onSubmit={toLocalStorage} className={`${blockName} ${className}`}>
            <Text align='center' weight='bold' typography='headline-s'>Профиль</Text>
            {['name', 'password', 'email'].map((key, index) => {
                return <Textinput
                    style={key === 'email' ? { display: 'none' } : {}}
                    hasClear
                    type={key}
                    // pattern={INPUTS[key].validation}
                    onChange={handleChangeValues}
                    value={key === 'email' ? email : edittebleValues[key]}
                    placeholder={key === 'password' ? 'Укажите новый пароль' : INPUTS[key].placeholder}
                    key={index}
                    size='s'
                    view='default'
                    name={key}
                />
            })}
            <Attach accept='image/*' holderTextWidth={100} name='attachment' hasHolder holderText="Файл не выбран" view="default" size="s">
                Загрузить аватар
            </Attach>
            <div className={controlName}>
                <Spacer />
                <Button progress={loading} size='s' theme='action' type='submit'>Сохранить</Button>
            </div>
        </form>
    }
}

export const FormViewProfile = withBemMod('Form', { view: 'profile' }, FormView)
