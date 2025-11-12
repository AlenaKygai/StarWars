import { memo } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <img
        src="src/assets/logo.png"
        alt="Star Wars Logo"
        className="Header__logo"
      />
    </header>
  );
};

export default memo(Header);
