import React from "react";
import tableData from "../data/tableData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import Rows from "./Rows";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

function Main() {
  const [allRows, setAllRows] = useState({});
  const [allCheckedRows, setAllCheckedRows] = useState([])

  const addToCart = () =>{
    const checkedRows =  Object.keys(allRows).reduce((finalRows, rowId)=>{
      
      if(allRows[rowId].checked === true)
      { 
        const childRows = allRows[rowId].children.filter((child)=>{
          return child.checked===true
        })

        finalRows.push({...allRows[rowId], children:childRows})

        return finalRows
      }

      return finalRows

    }, [])

    if(checkedRows)
    {
      setAllCheckedRows(checkedRows)
    }
  }

  const navigate = useNavigate()

  const showCheckedRows = () =>{
    navigate('/cart', {state : {allCheckedRows}})
  }

  // console.log(tableData)

  return (
    <>
      <Box sx={{ margin: "5rem", display: "flex", flexDirection: "column" }}>
        <Box sx={{ alignSelf: "end", padding: "1rem" }}>
          <Button variant="outlined" sx={{ marginRight: "1rem" }} onClick={addToCart}>
            Add to Cart
          </Button>
          <Button variant="outlined" onClick={showCheckedRows}>
            <ShoppingCartOutlinedIcon />
          </Button>
        </Box>
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
              {tableData.map((row) => {
                return (
                  <Rows
                    key={row.id}
                    rowOne={row}
                    allRows={allRows}
                    setAllRows={setAllRows}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Main;
