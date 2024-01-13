import { Link } from "react-router-dom";

const TopPanel = () => {
  return (
    <div className="top-panel">
      <svg
        width={54}
        height={54}
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
      </svg>
      <Link className="page-title" to="/">
        <span className="always">ALWAYS</span> AROUND
      </Link>
      <div className="welcome-user">
      <span>
              Välkommen Emilié
            </span>
            <i className="fa fa-heart"> </i>
      </div>
    </div>
  );
};

export default TopPanel;
