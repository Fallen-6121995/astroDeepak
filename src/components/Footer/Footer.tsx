import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="ftrLogo">
              <img src="images/SaloniLogo.png" alt="logo" />
            </div>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <a href="#">
                  <span>1-2-1 Coaching</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="elementor-icon-list-text">
                    Download free eBook
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="elementor-icon-list-text">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="ftrSocialLink">
              <p>
                <a href="#">Coachsalonisingh@gmail.com</a>
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
