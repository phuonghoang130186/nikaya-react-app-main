import { createContext, useContext, useEffect, useState } from "react"
import account from '~/data/account/account.json'
import { decryptedString, encryptedString } from "~/utils/crypto"
const authenticateContext = createContext()

const AuthenticateProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("ia") ? decryptedString(localStorage.getItem("ia")) : "")

    // Kiểm tra trạng thái đăng nhập khi ứng dụng khởi động
    useEffect(() => {
        const checkAuth = () => {
            try {
                const storedAuth = localStorage.getItem("ia")
                const expiresAt = localStorage.getItem("ea")

                if (!storedAuth || !expiresAt) {
                    handleLogout()
                    return
                }

                const decrypted = decryptedString(storedAuth)
                const expireTime = parseInt(expiresAt, 10)

                if (isNaN(expireTime) || Date.now() >= expireTime || decrypted !== "authenticated") {
                    handleLogout()
                } else {
                    setIsAuth(decrypted)
                }
            } catch (error) {
                handleLogout()
            }
        }

        checkAuth()
        const interval = setInterval(checkAuth, 3600000) // Kiểm tra mỗi phút

        return () => clearInterval(interval) // Cleanup khi component unmount
    }, [])

    const handleLogin = (username, password) => {
        if (username || !password) {
            alert("Invalid username or password")
            return false
        }
        const users = account
        const user = users.find((u) => u.password === password)
        if (user) {
            const expiresIn = 60 * 60 * 1000 * 24 * 3 // Hết hạn sau 3 ngày
            const expiresAt = Date.now() + expiresIn
            const encrytedAuth = encryptedString("authenticated")
            localStorage.setItem("ia", encrytedAuth)
            localStorage.setItem("ea", expiresAt.toString())
            setIsAuth("authenticated")
            return true
        } else {
            alert("Invalid username or password")
            return false
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("ia")
        localStorage.removeItem("ea")
        setIsAuth("")
    }

    return (
        <authenticateContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
            {children}
        </authenticateContext.Provider>
    )
}

const useAuthenticate = () => useContext(authenticateContext)

export { AuthenticateProvider, useAuthenticate }
