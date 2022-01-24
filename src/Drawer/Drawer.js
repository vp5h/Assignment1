import "./Drawer.css";

export default function Drawer() {
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
      <div className="options"></div>
    </div>
  );
}
