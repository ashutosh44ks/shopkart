import deliveryIcon from "../assets/delivery.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedInIcon from "../assets/linkedin.svg";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <span className="flex gap-2 cursor-pointer">
          <img src={deliveryIcon} alt="delivery" />
          Free Delivery
        </span>
        <span className="mx-2 sm:mx-4">|</span>
        <span className="cursor-pointer">Return Policy</span>
      </div>
      <div className="flex">
        <span className="px-2 sm:px-4 mx-0 xs:mx-2 cursor-pointer">Login</span>
        <span className="mx-2 sm:mx-4 cursor-pointer hide-on-mobile">Follow Us</span>
        <span className="flex gap-3 cursor-pointer">
            <img src={facebookIcon} alt="facebook" />
            <img src={linkedInIcon} alt="linkedin" />
            <img src={instagramIcon} alt="instagram" />
            <img src={twitterIcon} alt="twitter" />
        </span>
      </div>
    </header>
  );
};

export default Header;
