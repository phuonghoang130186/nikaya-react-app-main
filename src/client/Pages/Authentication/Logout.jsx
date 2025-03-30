import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthenticate } from "~/contexts/AuthenticateContent"

const Logout = () => {
    const { handleLogout } = useAuthenticate()
    const navigate = useNavigate()

    useEffect(() => {
        handleLogout()
        navigate("/dang-nhap")
    }, [handleLogout, navigate]) // Chạy khi component mount

    return null // Không render gì cả
}

export default Logout
