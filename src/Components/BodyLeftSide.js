import { Search } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextProvider } from "../Context/Context";
import { db } from "../Database/Config";
import "../Styling/BodyLeftSide.css";
import ContactCard from "./ContactCard";
import "../Styling/Body.css";
const BodyLeftSide = () => {
  const { user, Logout } = useContext(ContextProvider);
  const [Chat, setChat] = useState([]);
  const logout = () => {
    Logout();
  };
  useEffect(() => {
    const unsubcribe = db.collection("Chats").onSnapshot((snapshot) =>
      setChat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <>
      <div className="BodyLeft">
        <div className="LeftTop">
          <img src={user.photoURL} alt="user" />
          <p>{user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
        <div className="Search">
          <Search />
          <input type="search" placeholder="search your chats" />
        </div>
        <ContactCard addNewChat />
        <div className="Chats">
          {Chat.map((chat) => (
            <ContactCard key={chat.id} id={chat.id} name={chat.data.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyLeftSide;
