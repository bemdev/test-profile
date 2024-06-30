import React, { useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'

import Header from '../../common.blocks/Header/Header'
import Card from '../../common.blocks/Card/Card'

import './Peoples.css'

export const blockName = cn('People')()
const contentName = cn('People', 'content')()

const People = () => {

    const [peoples, setPeoples] = useState([])
    const [loading, setLoading] = useState(false)

    const username = localStorage.getItem('name')

    useEffect(() => {
        if (username) {
            setLoading(true)

            const formData = new FormData()
            formData.append('name', username)

            fetch('http://localhost:8081/api/peoples', { method: 'POST', body: formData })
                .then(response => {
                    response.json().then(result => setPeoples(result))
                    setLoading(false)
                })
                .catch(err => {
                    console.log("Can't load peoples", err)
                    setLoading(false)
                })
        }

    }, [setPeoples, username])

    return !loading ? (
        <div className={blockName}>
            <Header />
            <div className={contentName}>
                {peoples.map((people, index) => <Card key={index} people={people} />)}
            </div>
        </div>
    ) : <div>Loading...</div>
}

export default People