import { useEffect } from 'react'
import { router } from '../../../router'

const Logout = () => {
    useEffect(() => {
        localStorage.clear()
        router.navigate('/')
    }, [])
    return null
}
export default Logout