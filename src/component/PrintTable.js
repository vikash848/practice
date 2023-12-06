
import  React,{useRef, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactToPrint from 'react-to-print';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function PrintTable() {

    const componentRef=useRef()
    const handleBefore= async ()=>{
     await setTableHeight(null)
     await setMinWidth(null)
     console.log("Height",tableHeight)
    }

    const handleAfterPrint=async ()=>{
        await setTableHeight("500px")
        await setMinWidth("100px")
        console.log("Height",tableHeight)
       }
   
    
    const [minWidth,setMinWidth]=useState("100px");
    //const [tableHeight,setTableHeight]=useState("100px")
    const [tableHeight,setTableHeight]=useState("500px")
    console.log("tableHeight",tableHeight)
  return (
    <div style={{height:"100%"}}>
    <h2>Table</h2>
    <TableContainer component={Paper} ref={componentRef} style={{height:tableHeight,width:"90%",margin:"auto",position:"relative"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{position:"absolute"}}>
          <TableRow>
            <StyledTableCell style={{minWidth:minWidth}}>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Calories</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{minWidth:minWidth}} align="right">Perotein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{height:"70%",overflow:"auto"}}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.calories}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.fat}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
              <StyledTableCell style={{minWidth:minWidth}} align="right">{row.protein}</StyledTableCell>
           
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button onClick={()=>setTableHeight("600px")}>CLICK</button>
    <ReactToPrint
        trigger={() => <button >Download PDF</button>}
        content={() => componentRef.current}
        onBeforeGetContent={ handleBefore}
        onAfterPrint={handleAfterPrint}
      />
    </div>
  );
}
