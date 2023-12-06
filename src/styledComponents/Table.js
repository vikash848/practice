import styled from "styled-components";

export const DTable=styled.div`

display: grid;

grid-template-columns: repeat(${(props)=>props.num},${(props)=>100.0/props.num}% ) ;
background:#EDD4CF;
margin-top:10px;
`

export const Button=styled.button`
width:100px;
` 