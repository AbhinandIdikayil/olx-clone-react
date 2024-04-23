import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import { UserContext, } from '../App'

function ProtectedRoute() {
    const { user } = useContext(UserContext)
    if (!user) {
        return <Navigate to='/' />
    } else {
        return children
    }
}

export default ProtectedRoute