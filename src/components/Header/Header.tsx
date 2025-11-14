// Header component - displays application header with Star Wars logo
import { memo } from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      {/* Star Wars logo image */}
      <img src="/logo.png" alt="Star Wars Logo" className="Header__logo" />
    </header>
  );
};

export default memo(Header);
