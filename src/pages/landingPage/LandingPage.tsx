import { Link } from "react-router-dom";
import "./LandingPage.scss";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="landingPage">
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav-links">
          <a href="mailto:contact@company.com" className="contact-us-button">
            Contact Us
          </a>
        </nav>
      </header>

      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `url(/landingPage/landingPageBackground.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <h1>Smart IoT Management</h1>
          <p>
            Advanced solutions for provisioning and managing IoT devices with
            ease and security.
          </p>
        </section>

        <section className="product">
          <div className="product-content">
            <img
              src="/landingPage/idpLandingPage.jpg"
              alt="Product 1"
              className="product-image"
            />
            <div className="product-info">
              <h2>Device Provisioning</h2>
              <p>
                Experience the best of technology with Product 1. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link to={`/product/idp`} className="explore-button-1">
                Explore More
              </Link>
            </div>
          </div>
        </section>

        <section className="product">
          <div className="product-content">
            <img
              src="/landingPage/idmLandingPage.jpg"
              alt="Product 2"
              className="product-image"
            />
            <div className="product-info">
              <h2>Device Management</h2>
              <p>
                Discover the features of Product 2. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <Link to={`/product/idm`} className="explore-button-2">
                Explore More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
