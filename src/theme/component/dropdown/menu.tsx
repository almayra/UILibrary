import React, { ReactNode } from "react";
import "./dropdown.scss";
import { BiChevronRight } from "react-icons/bi";

interface IMenu {
  children: ReactNode;
  menuLabel: string;
  append?: boolean;
}

export const Menu = ({children, menuLabel, append}: IMenu) => {
  return (
    <li>
      <div className="menu">
        {menuLabel}
        {append ? <BiChevronRight className="append"/> : null}
      </div>
      <ul>
        {children}
      </ul>
    </li>
  )
}

export default Menu