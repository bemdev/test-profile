import React, { Component, FC } from 'react'
import { IClassNameProps, compose } from '@bem-react/core'
import { cn } from '@bem-react/classname'

import { FormViewProfile } from './_view/Form_view_profile'
import { FormViewSingin } from './_view/Form_view_singin'
import { FormViewSingup } from './_view/Form_view_singup'

import './Form.css'

export const blockName = cn('Form')()
export const controlName = cn(blockName, 'control')()

export interface IFormProps extends IClassNameProps {
    children?: Component
    view?: string
    setFormView?: React.Dispatch<React.SetStateAction<string>>
}

const Form: FC<IFormProps> = ({ children }) => <div className={blockName}>{children}</div>

export default compose(
    FormViewProfile,
    FormViewSingin,
    FormViewSingup
)(Form)