import { useContext, useEffect } from "react"
import { usersApi } from "../../api"
import { AuthContext } from "../../contexts/auth"
import { LoginFormType, User } from "../../types"

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

        const userLogged = users.find(user => user.email === email && user.password === password)

        if(userLogged) {
            const token = await setUserToken(userLogged.id);

            if(token) {
            localStorage.setItem('user-token', token)
            setCurrentUser(userLogged);
        }
        }
    }

    const loginWithToken = async () => {
        const users = await usersApi.getAll()

        const storedToken = localStorage.getItem('user-token');

        const logged = users.find(user => user.sessionToken === storedToken)        

        if (!me && logged) {
            setCurrentUser(logged)
        }
    }

    const logOut = (me: User) => {
        usersApi.patch(me.id, { sessionToken: null });
        setCurrentUser(undefined);
    }

    return { login, logOut, me }
}

export { useAuth }