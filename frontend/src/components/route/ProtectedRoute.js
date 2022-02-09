import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../layout/loader/Loader'

const ProtectedRoute = ({children }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    if(loading === false){
        if (isAuthenticated === false) {
            return <Navigate to='/login' />
        }

        return children
    }
    return <Loader/>
}

export default ProtectedRoute