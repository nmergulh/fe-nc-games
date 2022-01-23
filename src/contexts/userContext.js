import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [fullName, setFullName] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        username,
        avatar,
        setAvatar,
        fullName,
        setFullName,
        setUsername,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
