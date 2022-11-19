import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function RoutePrivate() {
  const {login}=useSelector((store)=>store.login)
  console.log(login);
  return (
    login ? <Outlet/>:<Navigate to="/" />
  )
}

export default RoutePrivate