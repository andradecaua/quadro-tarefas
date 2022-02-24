import { createContext, ReactNode, useState, useEffect } from 'react'

import { firebase, auth } from '../service/firebaseconfig'
import { useHistory } from 'react-router-dom'


type User = {
  id: string,
  name: string,
  email: string,
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid, email } = user
        setUser({
          name: String(displayName),
          avatar: String(photoURL),
          id: uid,
          email: String(email)
        })
      }
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  async function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider)
    if (result.user) {
      const { uid, displayName, photoURL, email } = result.user
      setUser({
        id: uid,
        name: String(displayName),
        avatar: String(photoURL),
        email: String(email),

      })
      history.push('/home')
    }
  }
  return (
    <AuthContext.Provider value={{ user, signWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )

}
