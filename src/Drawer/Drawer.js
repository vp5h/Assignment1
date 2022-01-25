import "./Drawer.css";
import { MdInbox, MdStarRate, MdSend, MdDrafts } from "react-icons/md";
import { useState } from "react";
export default function Drawer() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <BasicDrawer />
    </>
  );
}

function BasicDrawer() {
  return (
    <div className="Drawer">
      <span className="title">Title</span>
      <span className="subtext">Subtext</span>
      <div className="nav">
        <div className="options">
          <span className="Icon">
            <MdInbox />
          </span>
          <span className="option_text">Inbox</span>
        </div>
        <div className="options">
          <span className="Icon">
            <MdStarRate />
          </span>
          <span className="option_text">Star</span>
        </div>
        <div className="options">
          <span className="Icon">
            <MdSend />
          </span>
          <span className="option_text">Sent Mails</span>
        </div>
        <div className="options">
          <span className="Icon">
            <MdDrafts />
          </span>
          <span className="option_text">Drafts</span>
        </div>
      </div>
    </div>
  );
}
