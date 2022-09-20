import { useEffect } from "react"
import { usersApi } from "../../api"
import { LoginFormType } from "../../types"

const useAuth = () => {


    useEffect(() => {
        loginWithToken()
    }, [])

    const setUserToken = async (id: string) => {
        const newToken = Math.random().toString(36).substr(2);
        const resp = await usersApi.patch(id, {sessionToken: newToken});
        return resp ? newToken : null;        
    }

    const login = async ({ email, password}: LoginFormType) => {

        const users = await usersApi.getAll()

        const userLogged = users.find(user => user.email === email && user.password === password)

        if(userLogged) {
            const token = await setUserToken(userLogged.id);

            if(token) {
            localStorage.setItem('user-token', token)
        }
        }
    }

    const loginWithToken = async () => {
        const users = await usersApi.getAll()

        const storedToken = localStorage.getItem('user-token');

        const logged = users.find(user => user.sessionToken === storedToken)        
    }

    const logOut = (id: string) => {
        usersApi.patch(id, { sessionToken: null })
    }

    return { login, logOut }
}

export { useAuth }