import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import { FaGoogle, FaUserSecret } from 'react-icons/fa';


const Login = () => {
    const { user, signInWithGoogle, signInModeAnonymously } = useAuth()
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle()
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleAnonymousLogin = async () => {
        try {
            await signInModeAnonymously()
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/home')
        } else {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <div className="h-screen  flex flex-col justify-center items-center" >
            <div className="bg-gray-900 text-white rounded-lg p-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-8">Login</h1>
                <button
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-lg mb-4 flex items-center"
                    onClick={handleGoogleLogin}
                >
                    <FaGoogle className="mr-2" />
                    Login with Google
                </button>
                <button
                    className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-lg flex items-center"
                    onClick={handleAnonymousLogin}
                >
                    <FaUserSecret className="mr-2" />
                    Login Anonymously
                </button>
                <span>Si te logueas como anonimo, no podras hacer la compra</span>
            </div>
        </div>
    )
}

export default Login

