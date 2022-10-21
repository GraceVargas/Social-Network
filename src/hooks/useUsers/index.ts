import { usersApi } from "@api";
import { UsersContext } from "@contexts";
import { useContext, useEffect } from "react"
import { useAuth } from "../useAuth";

const useUsers = () => {

    const { loadUsers, users } = useContext(UsersContext);
    const { me } = useAuth();

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            const response = await usersApi.getAll();
            loadUsers(response);
            
    }  catch(err: any) {
        throw new Error(err.toString())
        }
    }

    const addFriend = async (idFriend: string) => {
        
        if (me) {
            
            let friends = me.friends;
            const id = me.id;
        
            if (!friends) {
                friends = [idFriend]; 
            } else if (!friends.includes(idFriend)) {
                friends.push(idFriend)
            }
            console.log(friends);
            try {
                const response = await usersApi.patch(id, {friends});

            }  catch(err: any) {
                throw new Error(err.toString())
                }
        }

    }
 
    return { users, addFriend }
}


export { useUsers }