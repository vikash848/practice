import WatermarkPdf from "./component/WatermarkPdf";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import "./App.css";
import Downloadpdf from "./component/Downloadpdf";
//import SearchBox from "./component/SearchBox";
import Timeline from "./component/Timeline";
import Usertable from "./component/Usertable";
import CloudinaryUploadWidget from "./component/CloudinaryUploadWidget";
import PrintTable from "./component/PrintTable";
import JsPDF from "./component/JsPDF";
import Enter from "./component/Enter";
import PreviewImage from "./component/PreviewImage";
import UploadPhoto from "./component/UploadPhoto";
import Debouncing from "./component/Debouncing";
import Throttle from "./component/Throttle";
import DynamicTable from "./component/DynamicTable";
import IdleTimerPage from "./component/IdleTimerPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import SortingTable from "./component/SortingTable";
import Uploadcsv from "./component/Uploadcsv";
import Uploadcsvfile from "./component/Uploadcsvfile";

function App() {
  // const onLoginSuccess=(res)=>{
  //   console.log("Login Success",res);
  // }
  // const onLoginFailure=(res)=>{
  //   console.log("Login Failure",res);
  // }
  // const onLogoutSuccess=(res)=>{
  //   console.log("Logout Success",res);
  // }
  // const onLogoutFailure=(res)=>{
  //   console.log("Logout Failure",res);
  // }
  //const clientId="228684737410-hte3f6m9p9f85pb9go4ia84v31kisavr.apps.googleusercontent.com";
  return (
  //   <div className="App">
  //    {/* <GoogleLogin clientId={clientId} buttonText="Login with google" onSuccess={onLoginSuccess} onFailure={onLoginFailure} cookiePolicy={'single_host_origin'}/>
  //    <br/>
  //    <GoogleLogout  clientId={clientId} buttonText="LogOut" onLogoutSuccess={onLogoutSuccess} onFailure={onLogoutFailure}/> */}
  //  <IdleTimerPage/>
  //   </div>
  <BrowserRouter>
  <Routes>
    <Route exact path="/idletimerpage" element={<IdleTimerPage/>}/>
    <Route exact path="/usertable" element={<Usertable/>}/>
    <Route exact path="/dynamictable" element={<DynamicTable/>}/>
    <Route exact path="/sortingtable" element={<SortingTable/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/uploadcsv" element={<Uploadcsv/>}/>
    <Route exact path="/previewimage" element={<PreviewImage/>}/>
    <Route exact path="/uploadcsvfile" element={<Uploadcsvfile/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;


// import React from 'react';
// import Watermark from 'react-awesome-watermark';
// import styled from 'styled-components';

// const H1 = styled.h1`
//   text-align: center;
// `;

// const H2 = styled.h2`
//   text-align: center;
//   margin-top: 50px;
// `;

// const H3 = styled.h3`
//   text-align: center;
// `;

// const WatermarkWrapper = styled.div`
//   text-align: center;

//   .space-props-test {
//     display: inline-block;
//     margin: 10px;
//   }
// `;

// const StyledWatermark = styled(Watermark)`
//   margin: 0 auto;

//   .inner-watermark {
//     width: 100%;
//     height: 100%;
//     border: 1px solid #ccc;
//     font-size: 20px;
//     text-align: center;
//     line-height: 2;
//   }
// `;

// export default function App() {
//   return (
//     <div>
//       <H1>Watermark Usage</H1>
//       <StyledWatermark
//         text="Watermark Rendering"
//         style={{
//           width: 500,
//           height: 500
//         }}
//         multiple
//       >
//         <div className="inner-watermark">
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//           <br />
//           You can drag this text
//         </div>
//       </StyledWatermark>
//       <H2>When you give "space" style props to Watermark</H2>
//       <H3>Before and After</H3>
//       <WatermarkWrapper>
//         <StyledWatermark
//           text="1"
//           style={{
//             width: 300,
//             height: 300
//           }}
//           multiple
//           className="space-props-test"
//         >
//           <div className="inner-watermark" />
//         </StyledWatermark>
//         <StyledWatermark
//           text="1"
//           style={{
//             width: 300,
//             height: 300,
//             space: 50
//           }}
//           multiple
//           className="space-props-test"
//         >
//           <div className="inner-watermark" />
//         </StyledWatermark>
//       </WatermarkWrapper>
//     </div>
//   );
// }