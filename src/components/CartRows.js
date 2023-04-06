import React from 'react'
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CartRows({row}) {

    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(!open);
      };

  return (
    <>
    <TableRow>
        <TableCell align="center">
          <Checkbox checked={true}/>
        </TableCell>
        <TableCell align="left" sx={{}}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <span
              onClick={() => openHandler(row.id)}
              style={{ cursor: "pointer" }}
            >
              {!open ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
            </span>
            {row.sno}
          </div>
        </TableCell>
        <TableCell align="left">
            {row.prodName}
        </TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="left">{row.qty}</TableCell>
      </TableRow>


      {open &&
        row.children.map((child) => {
          return (
            <TableRow key={child.sno}>
              <TableCell align="center">
                <Checkbox checked={true}/>
              </TableCell>
              <TableCell align="left">{child.sno}</TableCell>
              <TableCell align="left">{child.prodName}</TableCell>
              <TableCell align="left">{child.description}</TableCell>
              <TableCell align="left">{child.qty}</TableCell>
            </TableRow>
          );
        })}
    </>

  )
}

export default CartRows