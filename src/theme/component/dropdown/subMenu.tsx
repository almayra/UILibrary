import { ReactNode } from "react";

interface ISubMenu {
  children: ReactNode;
}

export const SubMenu = ({children}: ISubMenu) => {
  return (
    <li>{children}</li>
  )
}

export default SubMenu;