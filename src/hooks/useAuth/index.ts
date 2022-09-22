import { usersApi } from "../../api"
import { LoginFormType } from "../../types"

const useAuth = () => {

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

    return { login }
}

export { useAuth }