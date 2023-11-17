import { AddIcCall, AttachFile, Send, VideoCall } from "@mui/icons-material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import React, { useContext, useEffect, useState } from "react";
import "../Styling/BodyRightSide.css";
import "../Styling/BodyLeftSide.css";
import "../Styling/Body.css";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Context/Context";
import { db } from "../Database/Config";
const BodyRightSide = () => {
  const { ChatId } = useParams();
  const [ChatName, setChatName] = useState("");
  const [seed, setSeed] = useState("");
  const [Input, setInput] = useState("");
  const [Message, setMessage] = useState([]);
  const { user } = useContext(ContextProvider);
  const InputHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (ChatId) {
      db.collection("Chats")
        .doc(ChatId)
        .onSnapshot((snapshot) => {
          setChatName(snapshot.data().name);
        });

      db.collection("Chats")
        .doc(ChatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessage(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [ChatId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [ChatId]);

  const SubmitMessage = (e) => {
    e.preventDefault();
    db.collection("Chats")
      .doc(ChatId)
      .collection("messages")
      .add({
        name: user.displayName,
        timestamp: Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(),
        message: Input,
      });
    setInput("");
  };

  return (
    <>
      <div className="BodyRight">
        <div className="RightTop">
          <div className="DPNAMELASTSEEN">
            <div className="Dp">
              <img
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                alt=""
              />
            </div>
            <div className="NAMELASTSEEN">
              <h5>{ChatName}</h5>
              {Message.map((message) => (
                <p>{message.timestamp}</p>
              ))}
            </div>
          </div>
          <div className="Calls">
            <AddIcCall
              style={{
                fontSize: "xx-large",
              }}
            />
            <VideoCall
              style={{
                fontSize: "xx-large",
              }}
            />
            <PersonAddAltIcon
              style={{
                fontSize: "xx-large",
              }}
            />
          </div>
        </div>
        <div className="Messages">
          {Message.map((message) => {
            return (
              <>
                <p
                  className={`Chat_message ${
                    message.name === user.displayName && "Chat_reciver"
                  }`}
                >
                  <span className="Chat_name">{message.name}</span>
                  {message.message}
                  <span className="time">{message.timestamp}</span>
                </p>
              </>
            );
          })}
        </div>
        <form onSubmit={SubmitMessage} className="Message">
          <div className="Attachment">
            <AttachFile
              style={{
                fontSize: "xx-large",
              }}
            />
          </div>
          <div className="Input">
            <input
              type="text"
              value={Input}
              onChange={InputHandler}
              placeholder="write your message..."
            />
          </div>
          <div className="Send">
            <Send
              onClick={SubmitMessage}
              style={{
                fontSize: "xx-large",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BodyRightSide;
