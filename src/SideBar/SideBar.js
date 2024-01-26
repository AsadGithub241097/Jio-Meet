import "./SideBar.css";
import jiocam from "../logo/Icon.svg";
import chats from "../logo/ic_chat.svg";
import { useState } from "react";
import ChatSection from "../ChatSectionComponent/ChatSection";

const SideBarComponent = () => {
  const [flag, setflag] = useState(true);

  const onclickevent = (e) => {
    setflag((prev) => !prev);

    console.log(e.target);

    e.target.style.filter =
      "invert(79%) sepia(28%) saturate(5937%) hue-rotate(332deg) brightness(100%) contrast(92%)";
  };
  return (
    <div className="asd">
      <div className="side-bar">
        <div className="BG">
          <img className="iconcss" src={jiocam} alt="Not avalable" />
        </div>
        <div className="CallLog">
          <img
            onClick={onclickevent}
            className="ChatIcon"
            src={chats}
            alt="not avalable"
          />

          <p className="chats">Chats</p>
        </div>
      </div>
      {flag && <ChatSection />}
    </div>
  );
};

export default SideBarComponent;
