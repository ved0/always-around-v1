import { useMatch } from 'react-router-dom';

const Footer = () => {
  const aboutMatch = useMatch("/about");
  return (
    <footer className="footer">
      <div className="footer-container">
        {aboutMatch ? (
          <p className="footer-text">Developed by <br></br> <i className="fa fa-envelope"> </i><a href="mailto:vedadz@gmail.com">Vedad Zuga</a></p>
        ) : (
          <p className="footer-text">
            Developed with <span className="bold-text">love</span>
          </p>
        )}
        <span className="disclaimer-text">
          This is a school project and it is used for educational purposes only!
        </span>
      </div>
    </footer>
  );
};
export default Footer;
