import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
//import img from "/IMG_20230122_150408.jpg"
//import img from "../../public/IMG_20230122_150408.jpg"
import img from "../images/logo512.png"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const JsPDF = () => {
  const [minWidth, setMinWidth] = useState("100px");

  const [tableHeight, setTableHeight] = useState("500px");

  
  const generatePDF = () => {
    var doc = new jsPDF();
    doc.text("hui hui",500,-5)
    doc.addImage(img,15,5,15,15)
    
    
    //doc.addImage(img,10,5)
    autoTable(doc,{html:'#my-table' ,startY:20});
    doc.text("ssfooter",doc.internal.pageSize.width/2,doc.internal.pageSize.height-30)
    doc.setFontSize(5).text("footer",doc.internal.pageSize.width/2,doc.internal.pageSize.height-10)
    
    doc.save("table.pdf");
  };
  return (
    <div>
      <h2>Table</h2>
 
      <TableContainer
        
        component={Paper}
        style={{
          height: tableHeight,
          width: "90%",
          margin: "auto",
          position: "relative",
        }}
      >
        <Table id="my-table" sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead style={{ position: "absolute" }}>
            <TableRow>
              <StyledTableCell style={{ minWidth: minWidth }}>
                Dessert (100g serving)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Calories
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Fat&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Carbs&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Protein&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell style={{ minWidth: minWidth }} align="right">
                Perotein&nbsp;(g)
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ height: "70%", overflow: "auto" }}>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.fat}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.carbs}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
                <StyledTableCell style={{ minWidth: minWidth }} align="right">
                  {row.protein}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={generatePDF}>Generate PDF </button>
    </div>
  );
};

export default JsPDF;
