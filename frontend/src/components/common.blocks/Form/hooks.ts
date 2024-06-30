import React, { useCallback, useState, useRef, FormEvent } from 'react'

interface IFormHooks {
    formRef: React.RefObject<HTMLFormElement>
    handleSubmit: (e: FormEvent) => Promise<any>
    loading: boolean
}

export const useForm = (url: string, method: 'PUT' | 'POST'): IFormHooks => {

    const [loading, setLoading] = useState(false)

    const formRef: { current: HTMLFormElement | null } = useRef(null)

    const handleSubmit = async (e: FormEvent) => {
        setLoading(true)
        e.preventDefault()
        const body = new FormData(formRef.current || undefined)
        return fetch(url, { method, body }).then(response => {
            setLoading(false)
            return response
        })
    }

    return { formRef, handleSubmit, loading }
}

export const useEdittebleValues = (initialValues: any) => {

    const [edittebleValues, setEdittebleValues] = useState(initialValues)

    const handleChangeValues = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEdittebleValues({ ...edittebleValues, [e.target.name]: e.target.value })
    }, [edittebleValues, setEdittebleValues])

    return { edittebleValues, handleChangeValues }
}