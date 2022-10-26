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


  // to get all users 

  const getUsers = async () => {
      try {
          const response = await usersApi.getAll();
          loadUsers(response);
          
      }  catch(err: any) {
          throw new Error(err.toString())
          }
      }


  // to get user object of friends from user loggued (to add posts)

  const usersButMe = users.filter((user) => user.id !== me?.id);
  let otherUsers: User[] = [];

  const friendsIds = me?.friends;
  let userFriends: User[] = [];

  for (let user of usersButMe) {
    if (friendsIds) {
      for (let friend of friendsIds) {
        if (user.id === friend) {
          userFriends.push(user);
        } else if (user.id !== friend) {
          otherUsers.push(user)
        }
      }
    } else {
      otherUsers.push(user);
    }
  }

  
  

  // to get users except loggued and friends
 

 
    
  // to remove friend from user loggued

  const removeFriend = (friendsIds: string[], friend: string) => {
    let index = friendsIds.indexOf(friend);
    friendsIds.splice(index, 1);
    me && usersApi.patch(me.id, { friends: friendsIds });
  };

  // to add friend to user loggued

  const addFriend = async (idFriend: string) => {
    if (me) {
    let friends = me?.friends;

    if (!friends) {
      friends = [idFriend];
    } else if (!friends?.find(elem => elem === idFriend)) {
      friends?.push(idFriend);
    }
    try {
      const response = await usersApi.patch(me.id, { friends });
    } catch(err: any) {
      throw new Error(err.toString())
      }
        
    }
  }    
    
  



  return { users, otherUsers, userFriends, friendsIds, removeFriend, addFriend }
}

export { useUsers }