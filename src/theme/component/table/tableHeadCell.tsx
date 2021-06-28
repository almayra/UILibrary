import React, { ReactNode } from "react";
import { Th } from "@chakra-ui/react";

interface ITableHeadCell extends React.HTMLAttributes<HTMLTableHeaderCellElement>{
  children: ReactNode;
  append?: ReactNode;
  secondString?: string
}

export const TableHeadCell= ({children, append, secondString}:ITableHeadCell) => {
  return (
    <Th>
      <div style={{display:"flex", justifyContent:"space-between" }}>
        <div style={{display:"flex", flexDirection:"column"}}>
          {children}
          {secondString ? <p style={{fontWeight:"normal", fontSize:"10px", color:"gray"}}>{secondString}</p> : null}
        </div>
        {append ? <span>{append}</span> : null}
      </div>
    </Th>
  )
}

export default TableHeadCell