import React, { ReactNode } from "react";
import { Td } from "@chakra-ui/react";

interface ITableCell extends React.HTMLAttributes<HTMLTableCellElement>{
  children: ReactNode;
  prepend?: ReactNode;
  secondString?: string;
  image?: string;
  bold?: boolean;
}

export const TableCell = ({
  children,
  prepend,
  secondString,
  image,
  bold,
}:ITableCell) => {
  return (
    <Td>
      <div style={{display:"flex", flexDirection:"row" }}>
          {prepend ? <span style={{marginTop: "4px"}}>{prepend}</span> : null}
          {image ? <img alt="foto" src={image} style={{ height:"24px", marginTop:"-2px"}} /> : null}
          <div style={{display:"flex", flexDirection:"column", marginLeft:"4px"}}>
            {bold ? <div style={{fontWeight:"bold"}}>{children}</div> : <div>{children}</div> }
            {secondString ? <p style={{fontWeight:"normal", fontSize:"10px", color:"gray"}}>{secondString}</p> : null}
          </div>
        </div>
    </Td>
  )
}

export default TableCell