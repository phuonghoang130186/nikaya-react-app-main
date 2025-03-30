import { useState } from "react"
import { generatePassword } from "~/utils/crypto"

const UtilPage = () => {
    const [pass, setPass] = useState("")

    const handleGenPass = (e) => {
        e.preventDefault()
        const genPass = generatePassword()
        setPass(genPass)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl uppercase font-semibold text-center text-gray-700 mb-6">Tạo mật khẩu</h2>
                <form onSubmit={handleGenPass} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Password</label>
                        <span>{pass}</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Tạo Mật Khẩu
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UtilPage
