import { usersApi } from "@api";
import { UsersContext } from "@contexts";
import { useContext, useEffect } from "react"

const useUsers = () => {

    const { loadUsers, users } = useContext(UsersContext);

    useEffect(() => {
        getUsers();        
    }, [])

    const getUsers = async () => {
        try {
            const response = await usersApi.getAll();
            loadUsers(response);
            
        }  catch(err: any) {
            throw new Error(err.toString())
            }
        }


    
    return { users }
}

export { useUsers }