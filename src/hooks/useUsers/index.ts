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

    const friendsIds = me?.friends;
    let userFriends: User[] = [];
  
    for (let user of users) {
      if (friendsIds) {
        for (let friend of friendsIds) {
          if (user.id === friend) {
            userFriends.push(user);
          }
        }
      }
    }
    
    const removeFriend = (friendsIds: string[], friend: string) => {
      let index = friendsIds.indexOf(friend);
      friendsIds.splice(index, 1);
      me && usersApi.patch(me.id, { friends: friendsIds });
    };



    return { users, otherUsers, userFriends, friendsIds, removeFriend }
}

export { useUsers }