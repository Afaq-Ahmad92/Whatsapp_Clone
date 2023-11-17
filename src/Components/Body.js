import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Styling/Body.css";
import BodyLeftSide from "./BodyLeftSide";
import BodyRightSide from "./BodyRightSide";
const Body = () => {
  return (
    <>
      <div className="BodyMain">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BodyLeftSide />} />
            <Route
              path="/chat/:ChatId"
              element={
                <>
                  <BodyLeftSide />
                  <BodyRightSide />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Body;
