import logo from '../../../assets/images/logo.png'
import userLogo from '../../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-details">
        <div className="header-logo">
          <img src={logo}/>
        </div>
		<div className="header-logo">
		<img src={userLogo}/>
        </div>
      </div>
    </div>
  );
};
export default Header;
