import React, { useContext } from "react";
import "../Styling/UserRAuthentication.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ContextProvider } from "../Context/Context";
const UserRAuthentication = () => {
  const { Register } = useContext(ContextProvider);
  const UserReg = () => {
    Register();
  };

  return (
    <>
      <div className="body">
        <div className="Data">
          <span>
            <WhatsAppIcon
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </span>
          <h2
            style={{
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            WhatsApp Clone
          </h2>
          <button
            onClick={UserReg}
            style={{
              height: "30%",
              width: "70%",
              textAlign: "center",
            }}
          >
            Register With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default UserRAuthentication;
