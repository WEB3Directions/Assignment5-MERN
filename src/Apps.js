import React from 'react';
import { Link } from "react-router-dom";


// import Header from "./components/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
 import Cards from "./card";

import "./App.css";

// import Text3 from "./components/text3";
// import First_Component from "./components/First_Component";
// import Second_Component from "./components/Second_Component";
// import Third_Component from "./Third_Component";
//import Chair_container from "./Chair_container.js";
import Chair_container from './Chair_container.js';
//import Nav_Container from './components/Nav_Container.js';
import Second_container from './components/Second_container.js';
import Third_Container from './components/Third_Container.js';
import Cards2 from './Cards2.js';
import Fourth_Container from './components/Fourth_Container.js';
import Fifth_Container from './Fifth_Container.js';



function Apps() { 
  
  return (

    <div >
   <Chair_container/>
   <Second_container/>
   <Third_Container/>
   <br/> <br/>
   <Link to="/First_chair"><Cards title="Chair" desc="Golden Easy Spot Chair"  imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" price="$250.00"/></Link>
   <Link to="/Second_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" price="$200.00"/></Link>
   <Link to="/Third_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg" price="$220.00"/></Link>
   <Link to="/Fourth_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg" price="$290.00"/></Link>
   
   <br/> <br/> <br/>
   <Cards2 imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/banner/banner-1.jpg"/>
   <Fourth_Container/>

   <Link to="/First_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" price="$250.00"/></Link>
   <Link to="/Second_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-2.jpg" price="$200.00"/></Link>
   <Link to="/Third_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg" price="$220.00"/></Link>
   <Link to="/Fourth_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg" price="$290.00"/></Link>
   <Link to="/Fifth_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-5.jpg"price="$400.00"/></Link>
   <Link to="/Sixth_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" price="$100.00"/></Link>
   <Link to="/Seventh_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg" price="$700.00"/></Link>
   <Link to="/Eight_chair"><Cards title="Chair" desc="Golden Easy Spot Chair" imgSrc="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg" price="$1000.00"/></Link>
   <br/> <br/> <br/>

   <Fifth_Container/>

   
  

     
</div>

    
  );

}

export default Apps;





// function App() { 
  
//   return (

//     <div className="offset-text" >

//       <div> <Text3 color="blue"/>  </div>

// <First_Component/>

// <Second_Component/>
      
// <Third_Component/>
     
// </div>

    
//   );

// }

// export default App;



// function App() { 
  
//   return (

//     <div className="change">

//     <Cards title="Honda" imgSrc="https://static.pakwheels.com/2023/10/redesigned-2025-honda-accord-aims-to-surprise-with-significant-virtual-design-changes-222083_1.jpg" desc="Accord 2024"/>
//     <Cards title="Mercedes" imgSrc="https://www.thedrive.com/uploads/2022/07/21/2021-Mercedes-AMG-GT-Stealth-Edition.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440" desc="IMG GT"/>
//     <Cards title="BMW" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2019_BMW_M850i_xDrive_Automatic_4.4_Front.jpg/800px-2019_BMW_M850i_xDrive_Automatic_4.4_Front.jpg" desc="8 Series"/>
//     <Cards title="Lexus" imgSrc="https://global.toyota/pages/news/images/2020/07/07/1330/20200707_02_07_s.jpg"  desc="LS 450 2022"/>
     
// </div>

    
//   );

// }

// export default App;






























































































// import Cards from "./card";
// import Header from "./components/Header";
// import footer from "./footer";
// import Router from "./components/Router"
// import './App.css';
// // import { useState } from "react";




// function App() {

//   // const [userName, setUserName] = useState("Zakriya")
//   // const changeName = () => {
//   //   setUserName("Kiran")
//   //}

//   return (

//     <div>
// {/* 
//       <h1> {userName} </h1> */}

      
//       {/* <h1>Header</h1>
//       <Footer/>
//        */}
//    {/* <Cards title="Mercedes" imgSrc="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D"/>
//    <Cards title="Dodge Viper" imgSrc="https://img.freepik.com/premium-photo/red-racing-car-drift-track-dust-from-wheels-art-illustration-motion-blur_305419-2157.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"/>
//    <Cards title="Lamborghini " imgSrc="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"/>
//    */}


//      {/* <button onClick={changeName}>Update Name</button> */}




//        </div>
//   )
// }

// export default App;


































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
