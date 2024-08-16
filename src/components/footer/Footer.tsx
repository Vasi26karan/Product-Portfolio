import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
        <div className="quick-links">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <a href="mailto:your-email@example.com">Contact</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
