import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init'
export default function UserRoute({ children }) {
    const [user, loading, error] = useAuthState(auth)
    const location = useLocation();
    <ToastContainer />
    if (loading) {
        toast('Please Wait')
    }
    if (error) {
        toast(error.message)
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
}
