import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Database/Config";
import "../Styling/ContactCard.css";
const ContactCard = ({ name, id, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const [Message, setMessage] = useState("");
  const AddChat = () => {
    const ChatName = prompt("Add a new chat please");
    if (ChatName) {
      db.collection("Chats").add({
        name: ChatName,
      });
    }
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [name]);
  useEffect(() => {
    if (id) {
      db.collection("Chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessage(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, []);

  return (
    <>
      {!addNewChat ? (
        <Link to={`/chat/${id}`} className="chat">
          <div className="Image">
            <img
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
              alt=""
            />
          </div>
          <div className="Name">
            <h3>{name}</h3>
            <p>{Message[0]?.message}</p>
          </div>
        </Link>
      ) : (
        <div className="AddChat">
          <button onClick={AddChat}>Add a Chat</button>
        </div>
      )}
    </>
  );
};

export default ContactCard;
