import { Navigate, Outlet } from "react-router-dom"


function RoutePrivate() {
  return (
    false ? <Outlet/>:<Navigate to="/" />
  )
}

export default RoutePrivate