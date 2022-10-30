/* eslint-disable react-hooks/exhaustive-deps */
import { usersApi } from "@api";
import { useAuth } from "@hooks";
import { UsersContext } from "@contexts";
import { useContext, useEffect } from "react"
import { User } from "@types";

const useUsers = () => {

  const { loadUsers, users } = useContext(UsersContext);
  const { me, refreshMe } = useAuth();

  useEffect(() => {
      !users && getUsers();       
  }, [])


  // to get all users 

  const getUsers = async () => {
    try {
      const response = await usersApi.getAll();    
      loadUsers(response);
    } catch(err: any) {
      throw new Error(err.toString())
    }
  }

  // to get users except loggued and friends

    
  // to remove friend from user loggued

  const removeFriend = async (user: User) => {
    if(me){
      const friends = me.friends.filter(friend => friend !== user.id);
      await usersApi.patch(me.id, { friends });
      await refreshMe()
      getUsers()
    }
  };

  // to add friend to user loggued

  const addFriend = async (user: User) => {
    if (me) {
    let friends = me?.friends;

    if (!friends) {
      friends = [user.id];
    } else if (!friends?.find(elem => elem === user.id)) {
      friends?.push(user.id);
    }
    try {
      await usersApi.patch(me.id, { friends });
      await refreshMe()
      getUsers()
    } catch(err: any) {
      throw new Error(err.toString())
      }
        
    }
  }    
    
  



  return { users, removeFriend, addFriend }
}


export { useUsers }