import "./Letter.scss";

function Letter({ isOpen }) {
  return (
    <div className="letter--container">
      <div className="upper-triangle"></div>
      <div className="x">
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
      </div>
      {isOpen && <div className="bottom-triangle"></div>}
    </div>
  );
}

export default Letter;
