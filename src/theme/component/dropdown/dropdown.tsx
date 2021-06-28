import React, { CSSProperties, ReactNode, useState } from "react";
import "./dropdown.scss";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronExpand } from "react-icons/bs";

interface IDropdown {
  children: ReactNode;
  placeholder: string;
  prepend?: boolean;
  append?: boolean;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Dropdown = ({
  children, 
  placeholder, 
  prepend, 
  append, 
  className, 
  style, 
  disabled
}:IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="dropdown">
      <li className={`${isOpen ? "focus" : ""}`}>
        <button
        className={`select ${className} ${disabled ? "disabled" : null}`} 
        style={style}
        onClick={toggleDropdown}
        >
          {prepend ? <BsChevronExpand className="prepend"/> : null}
          {placeholder}
          {append ? <BiChevronDown className="append"/> : null}
        </button>
        <ul>
          {children}
        </ul>
      </li>
    </ul>
  )
}

export default Dropdown;