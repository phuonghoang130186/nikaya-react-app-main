import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthenticate } from "~/contexts/AuthenticateContent"
import { decryptedString, encryptedString } from "~/utils/crypto"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(localStorage.getItem('rmb') === 'true' || false)
    const { handleLogin } = useAuthenticate()
    const navigate = useNavigate()

    useEffect(() => {
        const getAccount = () => {
            const getPass = localStorage.getItem('mw') ? decryptedString(localStorage.getItem('mw')) : ""
            if (getPass) setPassword(getPass)
        }
        getAccount()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (remember) {
            const encode = encryptedString(password)
            localStorage.setItem('mw', encode)
            localStorage.setItem('rmb', true)
        } else {
            localStorage.removeItem('mw')
        }
        const loginResult = handleLogin(username, password)
        if (loginResult) navigate("/")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl uppercase font-semibold text-center text-gray-700 mb-6">Đăng nhập</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Username</label>
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                            className="mr-2"
                        />
                        <label htmlFor="remember" className="text-gray-600 text-sm">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
