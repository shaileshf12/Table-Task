import React from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import CartRows from "./CartRows";

function Cart() {
  const { state } = useLocation();
  const { allCheckedRows } = state;

  return (
    <Box sx={{ margin: "5rem"}}>
      {allCheckedRows.length===0 ? <h2>Cart is empty</h2> :
      <TableContainer component={Paper} sx={{ border: "1px solid black" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="left">Sno</TableCell>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {allCheckedRows.map((row)=>{
            return <CartRows key={row.id} row={row}/>
          })}
          </TableBody>
        </Table>
      </TableContainer>}
    </Box>
  );
}

export default Cart;
