import { usersApi } from "@api";
import { useAuth } from "@hooks";
import { UsersContext } from "@contexts";
import { useContext, useEffect } from "react"
import { User } from "@types";

const useUsers = () => {

    const { loadUsers, users } = useContext(UsersContext);
    const { me } = useAuth();

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

    const otherUsers = users.filter((user) => user.id !== me?.id);    

    const friends = me?.friends;
    let userFriends: User[] = [];
  
    for (let user of users) {
      if (friends) {
        for (let friend of friends) {
          if (user.id === friend) {
            userFriends.push(user);
          }
        }
      }
    }
    
    return { users, otherUsers, userFriends }
}

export { useUsers }