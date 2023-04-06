import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableCell from "@mui/material/TableCell";
import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Checkbox } from "@mui/material";
import { useEffect } from "react";

function Rows({ rowOne, allRows, setAllRows }) {
  const [open, setOpen] = useState(false);
  const [extraRows, setExtraRows] = useState([]);

  const [mainRow, setMainRow] = useState({ ...rowOne });

  useEffect(() => {
    setAllRows({ ...allRows, [mainRow.id]: mainRow });
  }, [mainRow]);

  const openHandler = () => {
    setOpen(!open);
  };

  const addRow = () => {
    const temp =
      mainRow.sno + (mainRow.children.length + extraRows.length + 1) / 10;
    // setExtraRows([...extraRows, temp]);
    const childRow = {
      sno: temp,
      prodName: "",
      description: "",
      qty: '',
      checked: false,
    };

    setMainRow({...mainRow, children:[...mainRow.children, childRow]})
  };

  const mainRowHandler = (e) => {
    if (e.target.checked) {
      const arr = mainRow.children.map((newRow) => {
        // newRow.checked = e.target.checked
        return { ...newRow, checked: e.target.checked };
      });

      setMainRow({ ...mainRow, checked: true, children: arr });
    } else {
      const arr = mainRow.children.map((newRow) => {
        return { ...newRow, checked: e.target.checked };
      });

      setMainRow({ ...mainRow, checked: e.target.checked, children: arr });
    }
  };

  const subRowHandler = (sno, e) => {
    const arr = mainRow.children.map((newRow) => {
      if (newRow.sno === sno) {
        return { ...newRow, checked: e.target.checked };
      }

      return newRow;
    });

    if (e.target.checked === true) {
      setMainRow({ ...mainRow, checked: e.target.checked, children: arr });
    } else {
      setMainRow({ ...mainRow, children: arr });
    }

    let count = 0;
    arr.map((newRow) => {
      if (newRow.checked === true) {
        count++;
      }
    });

    if (count === 0) {
      setMainRow({ ...mainRow, checked: false, children: arr });
    }
  };

  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Checkbox checked={mainRow.checked} onChange={mainRowHandler} />
        </TableCell>
        <TableCell align="left" sx={{}}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <span
              onClick={() => openHandler(mainRow.id)}
              style={{ cursor: "pointer" }}
            >
              {!open ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
            </span>
            {mainRow.sno}
          </div>
        </TableCell>
        <TableCell align="left">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {mainRow.prodName}
            <AddCircleOutlineOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={addRow}
            />
          </div>
        </TableCell>
        <TableCell align="left">{mainRow.description}</TableCell>
        <TableCell align="left">{mainRow.qty}</TableCell>
      </TableRow>

      {open &&
        mainRow.children.map((child, i) => {
          return (
            <TableRow key={child.sno}>
              <TableCell align="center">
                <Checkbox
                  checked={child.checked}
                  onChange={(e) => {
                    subRowHandler(child.sno, e);
                  }}
                />
              </TableCell>
              <TableCell align="left">{child.sno}</TableCell>
              <TableCell align="left">{child.prodName}</TableCell>
              <TableCell align="left">{child.description}</TableCell>
              <TableCell align="left">{child.qty}</TableCell>
            </TableRow>
          );
        })}

      {/* <TextField variant="outlined" sx={{"& fieldset": { border: 'none' }}}/> */}

      {open &&
        extraRows.length !== 0 &&
        extraRows.map((row) => {
          return (
            <TableRow key={row}>
              <TableCell align="center">
                <Checkbox />
              </TableCell>
              <TableCell align="left">{row}</TableCell>
              <TableCell align="left">
                <input
                  placeholder="Enter product name"
                  style={{
                    fontSize: ".9rem",
                    fontFamily: "'Roboto', sans-serif",
                    border: "none",
                    outline: "none",
                    color: "#3d3e3e",
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <input
                  placeholder="Enter description"
                  style={{
                    fontSize: ".95rem",
                    fontFamily: "'Roboto', sans-serif",
                    border: "none",
                    outline: "none",
                    color: "#3d3e3e",
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <input
                  placeholder="Enter Quantity"
                  style={{
                    fontSize: ".95rem",
                    fontFamily: "'Roboto', sans-serif",
                    border: "none",
                    outline: "none",
                    color: "#3d3e3e",
                  }}
                />
              </TableCell>
            </TableRow>
          );
        })}
    </>
  );
}

export default Rows;
