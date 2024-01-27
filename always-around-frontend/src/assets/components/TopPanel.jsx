import { Link } from "react-router-dom";

const TopPanel = () => {
  return (
    <div className="top-panel">
      <div className="page-header">
        <Link className="page-logo" to="/">
          <img
            src="static/logo.png"
            alt="Always aronud logo"
            width="54"
            height="54"
          ></img>
        </Link>
        <Link className="page-title" to="/">
          <span className="always">ALWAYS</span> AROUND
        </Link>
      </div>
      <div className="divider"></div>
      <div className="welcome-user">
        <span>Välkommen Emilié</span>
        <i className="fa fa-heart"> </i>
      </div>
    </div>
  );
};

export default TopPanel;
