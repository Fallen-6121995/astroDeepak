import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="banner-section">
        <div className="headline-text">
          <h1>I help Leaders with Profound Professional & Spiritual Growth</h1>
        </div>
        <div className="cta-button-section">
          <button className="cta-button">
            <span>
              <FaArrowRightLong />
            </span>
            Let's Discuss your Goals
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
