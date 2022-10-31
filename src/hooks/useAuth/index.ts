/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { usersApi } from "../../api"
import { AuthContext } from "../../contexts/auth"
import { LoginFormType, User } from "../../types"
import { useUsers } from "../useUsers"

const useAuth = () => {

    const { me, setCurrentUser } = useContext(AuthContext)

    useEffect(() => {
        loginWithToken()
    }, []);

    const setUserToken = async (id: string) => {
        const newToken = Math.random().toString(36).substr(2);
        const resp = await usersApi.patch(id, {sessionToken: newToken});
        return resp ? newToken : null;        
    }

    const login = async ({ email, password}: LoginFormType) => {

        const users = await usersApi.getAll()

        try {
            const userLogged = users?.find(user => user.email === email && user.password === password)
    
            if(userLogged) {
                const token = await setUserToken(userLogged.id);
    
                if(token) {
                    localStorage.setItem('user-token', token)
                    setCurrentUser(userLogged);
                } else {
                    throw new Error('No fue posible crear el token')
                }
            } else {
                throw new Error('No existe el usuario')
            }

        } catch(err: any) {
            throw new Error(err.toString())
        }

    }

    const loginWithToken = async () => {

        const users = await usersApi.getAll()

        const storedToken = localStorage.getItem('user-token');

        const logged = users?.find(user => user.sessionToken === storedToken)   
        
        if (logged) {
            setCurrentUser(logged)
        }
    }

    const refreshMe = async () => { await loginWithToken() }

    const logOut = async () => {
        me && await usersApi.patch(me.id, { sessionToken: null });
        setCurrentUser(undefined);
    }

    return { login, logOut, me, refreshMe }
}

export { useAuth }