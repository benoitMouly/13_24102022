import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

  const { userInfo } = useSelector((state) => state.user)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
        <>
          <Navigate to={{ pathname: '/login' }} />
      </>
    )
  }

  // returns child route elements,  and renders the current route selected
  return <Outlet />
}
export default ProtectedRoute