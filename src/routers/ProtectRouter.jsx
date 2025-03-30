import { Navigate } from "react-router-dom"
import { useAuthenticate } from "~/contexts/AuthenticateContent"

const ProtectRouter = ({ children }) => {

    const { isAuth } = useAuthenticate()
    if (isAuth !== "authenticated") {
        return (
            <Navigate to='/logout' />
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }

}

export default ProtectRouter
