import "./Header.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logoIcon from "../../assets/Logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import SearchBar from "../SearchBar/SearchBar";
import searchIcon from "../../assets/Icons/search.svg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logoIcon} className="header__logo" alt="Brainflix logo" />
      </NavLink>
      <nav className="header__nav">
        <div className="header__search--div">
          <SearchBar
            className="header__search"
            icon={searchIcon}
            placeholder="Search"
            alt="search icon"
            name="search"
          />
          <div className="header__userMobile">
            <div className="header__user"></div>
          </div>
        </div>
        <NavLink to="/uploadPage">
          <div className="header__button--div">
            <Button
              className="header__button"
              icon={uploadIcon}
              alt="upload icon"
              text="UPLOAD"
            />
          </div>
        </NavLink>
        <div className="header__userTablet">
          <div className="header__user"></div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
