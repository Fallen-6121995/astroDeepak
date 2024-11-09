import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer secPadding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="ftrLogo">
                <img src="/images/SaloniLogo.png" alt="logo" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <ul className="list-inline">
                <li>
                  <Link href="/services/life-transforming-advice">
                    <span>1-2-1 Coaching</span>
                  </Link>
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
            <div className="col-md-6 col-lg-3">
              <div className="ftrSocialLink">
                <p>
                  <a href="mailto:sortingzindagi@gmail.com">sortingzindagi@gmail.com</a>
                </p>
                <ul className="list-inline">
                <a href="https://www.facebook.com/sortingzindagi" target="_blank" rel="noopener noreferrer">
                  <li className="list-inline-item mx-2">
                    <FaFacebookF className="mainYellow" />
                  </li>
                  </a>
                  <a href="https://www.instagram.com/_sortingzindagi/" target="_blank" rel="noopener noreferrer">
                  <li className="list-inline-item mx-2">
                    <FaInstagram className="mainYellow" />
                  </li>
                  </a>
                  <a href="https://www.youtube.com/@SortingZindagi" target="_blank" rel="noopener noreferrer">
                  <li className="list-inline-item mx-2">
                    <FaYoutube className="mainYellow" />
                  </li>
                  </a>
                  <a href="https://x.com/SortingZindagi" target="_blank" rel="noopener noreferrer">
                  <li className="list-inline-item mx-2">
                    <FaXTwitter className="mainYellow" />
                  </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <ul className="list-inline">
                <li>
                  <Link href="/services/life-transforming-advice">
                    <span>1-2-1 Coaching</span>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span className="elementor-icon-list-text">
                      Download free eBook
                    </span>
                  </a>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span className="elementor-icon-list-text">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footerBottom">
        <div className="container">
          <p className="mb-0 py-2">© 2020, Abc Pvt Ltd.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
