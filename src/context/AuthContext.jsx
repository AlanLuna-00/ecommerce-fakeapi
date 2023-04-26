import { useContext, createContext } from "react"
import { useEffect, useState } from "react"
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signInAnonymously,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from "../api/firebase.config"

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    const signInModeAnonymously = () => {
        signInAnonymously(auth)
            .then(userCredential => {
                setUser(userCredential.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const signOutWithGoogle = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    id: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                })
            } else {
                setUser(false)
            }
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOutWithGoogle, signInModeAnonymously}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
